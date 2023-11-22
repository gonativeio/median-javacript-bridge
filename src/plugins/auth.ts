import { DefaultResponse } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type AuthStatusReponse = { biometryType: string; hasTouchId: boolean; hasSecret: boolean };

type AuthStatusParams = {
  callback?: (data: AuthStatusReponse) => void;
};

type AuthSaveParams = {
  callback?: (data: DefaultResponse) => void;
  secret: string;
};

type AuthGetParams = {
  callback?: (data: DefaultResponse & { secret?: string }) => void;
  prompt?: string;
};

type AuthDeleteParams = {
  callback?: (data: DefaultResponse & { secret?: string }) => void;
  prompt?: string;
};

const auth = {
  status: function (params: AuthStatusParams) {
    return addCommandCallback<AuthStatusReponse>('median://auth/status', params);
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
