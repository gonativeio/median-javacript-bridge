import { CallbackParams, CallbackData } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type AuthStatusResult = { biometryType: string; hasTouchId: boolean; hasSecret: boolean };

type AuthSaveParams = {
  callback?: (data: CallbackData) => void;
  secret: string;
};

type AuthGetParams = {
  callback?: (data: { success: boolean; error?: string; secret?: string }) => void;
  prompt?: string;
};

type AuthDeleteParams = {
  callback?: (data: { success: boolean; error?: string; secret?: string }) => void;
  prompt?: string;
};

const auth = {
  status: function (params: CallbackParams<AuthStatusResult>) {
    return addCommandCallback<AuthStatusResult>('median://auth/status', params);
  },
  save: function (params: AuthSaveParams) {
    if (typeof params.secret !== 'string') {
      params.secret = JSON.stringify(params.secret);
    }
    addCommand('median://auth/save', params);
  },
  get: function (params: AuthGetParams) {
    addCommand('median://auth/get', params);
  },
  delete: function (params: AuthDeleteParams) {
    addCommand('median://auth/delete', params);
  },
};

export default auth;
