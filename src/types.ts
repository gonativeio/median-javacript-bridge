/* eslint-disable @typescript-eslint/no-explicit-any */

export type AnyData = any;

export type CallbackParams<T = undefined> = {
  callback?: (data: T) => void;
  callbackFunction?: (data: T) => void;
  statuscallback?: (data: T) => void;
};

export type CallbackData = { success: boolean; error?: string };
