import { AnyData, CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';
import { AuthDeleteParams, AuthGetParams, AuthSaveParams, AuthStatusData } from './auth';

type Auth0LoginUniveralData = {
  idToken: string;
  accessToken: string;
  scope?: string;
  error?: string;
};

type Auth0LoginUniveralParams = {
  callback?: (data: Auth0LoginUniveralData) => void;
  enableBiometrics?: boolean;
};

type Auth0ProfileParams = {
  accessToken: string;
  callback?: (data: AnyData) => void;
};

const auth0 = {
  loginUniversal: function (params: Auth0LoginUniveralParams) {
    addCommand('median://auth0/loginUniversal', params);
  },
  logout: function (params: CallbackParams<{ error?: string }>) {
    addCommand('median://auth0/logout', params);
  },
  status: function (params: CallbackParams<AuthStatusData>) {
    return addCommandCallback<AuthStatusData>('median://auth0/status', params);
  },
  save: function (params: AuthSaveParams) {
    if (typeof params.secret !== 'string') {
      params.secret = JSON.stringify(params.secret);
    }
    addCommand('median://auth0/save', params);
  },
  profile: function (params: Auth0ProfileParams) {
    return addCommandCallback<Auth0LoginUniveralData>('median://auth0/profile', params);
  },
  get: function (params: AuthGetParams) {
    addCommand('median://auth0/get', params);
  },
  delete: function (params: AuthDeleteParams) {
    addCommand('median://auth0/delete', params);
  },
};

export default auth0;
