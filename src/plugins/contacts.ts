import { addCommandCallback } from '../utils';

const contacts = {
  getAll: function (params: any) {
    return addCommandCallback('median://contacts/getAll', params);
  },
  getPermissionStatus: function (params: any) {
    return addCommandCallback('median://contacts/getPermissionStatus', params);
  },
};

export default contacts;
