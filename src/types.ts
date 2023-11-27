/* eslint-disable @typescript-eslint/no-explicit-any */

export type AnyData = any;

export type CallbackParams<T = undefined> = {
  callback?: (data: T) => void;
  callbackFunction?: (data: T) => void;
  statuscallback?: (data: T) => void;
};

export type CallbackData = { success: boolean; error?: string };

export type ListenersType = Record<string, Record<string, (...data: AnyData) => void>>;

export type AddListenerType = (callback: (...args: AnyData) => void, functionName: string) => string;

export type RemoveListenerType = (functionName: string, functionId: string) => void;

export type CallbacksType = Record<string, ((...data: AnyData) => void)[]>;

export type AddCallbackType = (callback: (...args: AnyData) => void, functionName: string) => void;
