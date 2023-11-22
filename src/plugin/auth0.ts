import { addCommand, addCommandCallback } from '../utils';

const auth0 = {
  loginUniversal: function (params: any) {
    addCommand('median://auth0/loginUniversal', params);
  },
  logout: function (params: any) {
    addCommand('median://auth0/logout', params);
  },
  status: function (params: any) {
    return addCommandCallback('median://auth0/status', params);
  },
  save: function (params: any) {
    if (typeof params.secret !== 'string') {
      params.secret = JSON.stringify(params.secret);
    }
    addCommand('median://auth0/save', params);
  },
  profile: function (params: any) {
    addCommandCallback('median://auth0/profile', params);
  },
  get: function (params: any) {
    addCommand('median://auth0/get', params);
  },
  delete: function (params: any) {
    addCommand('median://auth0/delete', params);
  },
};

export default auth0;
