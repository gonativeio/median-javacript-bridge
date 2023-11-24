import { AnyData, CallbackParams, CallbackData } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type Auth0LoginUniveralResult = {
  idToken: string;
  scope?: string;
  error?: string;
};

type Auth0LoginUniveralParams = {
  callback?: (data: Auth0LoginUniveralResult) => void;
  enableBiometrics?: boolean;
};

type AuthStatusResult = { biometryType: string; hasTouchId: boolean; hasSecret: boolean };

type Auth0SaveParams = {
  callback?: (data: CallbackData) => void;
  secret: string;
};

type Auth0GetParams = {
  callback?: (data: { success: boolean; error?: string; secret?: string }) => void;
  prompt?: string;
};

type Auth0ProfileParams = {
  accessToken: string;
  callback?: (data: AnyData) => void;
};

type Auth0DeleteParams = {
  callback?: (data: { success: boolean; error?: string; secret?: string }) => void;
  prompt?: string;
};

const auth0 = {
  loginUniversal: function (params: Auth0LoginUniveralParams) {
    addCommand('median://auth0/loginUniversal', params);
  },
  logout: function (params: CallbackParams<{ error?: string }>) {
    addCommand('median://auth0/logout', params);
  },
  status: function (params: CallbackParams<AuthStatusResult>) {
    return addCommandCallback<AuthStatusResult>('median://auth0/status', params);
  },
  save: function (params: Auth0SaveParams) {
    if (typeof params.secret !== 'string') {
      params.secret = JSON.stringify(params.secret);
    }
    addCommand('median://auth0/save', params);
  },
  profile: function (params: Auth0ProfileParams) {
    return addCommandCallback('median://auth0/profile', params);
  },
  get: function (params: Auth0GetParams) {
    addCommand('median://auth0/get', params);
  },
  delete: function (params: Auth0DeleteParams) {
    addCommand('median://auth0/delete', params);
  },
};

export default auth0;
