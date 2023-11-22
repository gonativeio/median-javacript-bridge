import { AnyData, DefaultResponse } from '../types';
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

type Auth0LogoutParams = {
  callback?: (data: { error?: string }) => void;
};

type Auth0StatusReponse = { biometryType: string; hasTouchId: boolean; hasSecret: boolean };

type Auth0StatusParams = {
  callback?: (data: Auth0StatusReponse) => void;
};

type Auth0SaveParams = {
  callback?: (data: DefaultResponse) => void;
  secret: string;
};

type Auth0GetParams = {
  callback?: (data: DefaultResponse & { secret?: string }) => void;
  prompt?: string;
};

type Auth0ProfileParams = {
  accessToken: string;
  callback?: (data: AnyData) => void;
};

type Auth0DeleteParams = {
  callback?: (data: DefaultResponse & { secret?: string }) => void;
  prompt?: string;
};

const auth0 = {
  loginUniversal: function (params: Auth0LoginUniveralParams) {
    addCommand('median://auth0/loginUniversal', params);
  },
  logout: function (params: Auth0LogoutParams) {
    addCommand('median://auth0/logout', params);
  },
  status: function (params: Auth0StatusParams) {
    return addCommandCallback<Auth0StatusParams>('median://auth0/status', params);
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
