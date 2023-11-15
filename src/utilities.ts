export function addCommandCallback(command?: any, params?: any, persistCallback?: boolean) {
  if (params && params.callback) {
    // execute command with provided callback function
    addCommand(command, params, persistCallback);
  } else {
    // create a temporary function and return a promise that executes command
    const tempFunctionName: any = '_gonative_temp_' + Math.random().toString(36).slice(2);
    if (!params) params = {};
    params.callback = tempFunctionName;
    return new Promise(function (resolve) {
      // declare a temporary function
      (window[tempFunctionName] as any) = function (data: any) {
        resolve(data);
        delete window[tempFunctionName];
      };
      // execute command
      addCommand(command, params);
    });
  }
}

export function addCallbackFunction(callbackFunction?: any, persistCallback?: boolean) {
  let callbackName: any;
  if (typeof callbackFunction === 'string') {
    callbackName = callbackFunction;
  } else {
    callbackName = '_gonative_temp_' + Math.random().toString(36).slice(2);
    (window[callbackName] as any) = function (...args: any) {
      callbackFunction(...args);
      if (!persistCallback) {
        // if callback is used just once
        delete window[callbackName];
      }
    };
  }
  return callbackName;
}

export function addCommand(command?: any, params?: any, persistCallback?: boolean) {
  let data: any = undefined;
  if (params) {
    const commandObject: any = {};
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
  } else data = command;

  window.webkit?.messageHandlers?.JSBridge?.postMessage(data);
}
