import { addCommand, addCommandCallback } from '../utilities';

const auth = {
  status: function (params: any) {
    return addCommandCallback('median://auth/status', params);
  },
  save: function (params: any) {
    if (!(typeof params.secret === 'string')) {
      params.secret = JSON.stringify(params.secret);
    }
    addCommand('median://auth/save', params);
  },
  get: function (params: any) {
    addCommand('median://auth/get', params);
  },
  delete: function (params: any) {
    addCommand('median://auth/delete', params);
  },
};

export default auth;
