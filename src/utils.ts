import { AnyData } from './types';

interface JSBridgeType {
  postMessage?: (data: string) => void;
}

declare global {
  interface Window {
    webkit?: {
      messageHandlers?: {
        JSBridge?: JSBridgeType;
      };
    };
    JSBridge?: JSBridgeType;
  }
}

export function addCallbackFunction(callbackFunction: string | ((data?: AnyData) => void), persistCallback?: boolean) {
  if (typeof callbackFunction === 'string') {
    return callbackFunction;
  }

  const callbackName = '_median_temp_' + Math.random().toString(36).slice(2);

  (window[callbackName as AnyData] as AnyData) = function (...args: AnyData) {
    callbackFunction(...args);
    if (!persistCallback) {
      delete window[callbackName as AnyData];
    }
  };

  return callbackName;
}

export function addCommand(command: string, params?: AnyData, persistCallback?: boolean) {
  let data = command;

  if (params) {
    const commandObject: AnyData = {};
    if (params.callback && typeof params.callback === 'function') {
      params.callback = addCallbackFunction(params.callback, persistCallback);
    }
    if (params.callbackFunction && typeof params.callbackFunction === 'function') {
      params.callbackFunction = addCallbackFunction(params.callbackFunction, persistCallback);
    }
    if (params.statuscallback && typeof params.statuscallback === 'function') {
      params.statuscallback = addCallbackFunction(params.statuscallback, persistCallback);
    }
    commandObject.gonativeCommand = command;
    commandObject.data = params;
    data = JSON.stringify(commandObject);
  }

  if (window.JSBridge?.postMessage) {
    window.JSBridge.postMessage(data);
  }
  if (window.webkit?.messageHandlers?.JSBridge?.postMessage) {
    window.webkit.messageHandlers.JSBridge.postMessage(data);
  }
}

export function addCommandCallback<T = AnyData>(
  command: string,
  params?: AnyData,
  persistCallback?: boolean
): Promise<T> | undefined {
  if (params && params.callback) {
    addCommand(command, params, persistCallback);
  } else {
    const tempFunctionName = '_median_temp_' + Math.random().toString(36).slice(2);

    if (!params) {
      params = {};
    }

    params.callback = tempFunctionName;
    return new Promise(function (resolve) {
      (window[tempFunctionName as AnyData] as AnyData) = function (data: T) {
        resolve(data);
        delete window[tempFunctionName as AnyData];
      };
      addCommand(command, params);
    });
  }
}
