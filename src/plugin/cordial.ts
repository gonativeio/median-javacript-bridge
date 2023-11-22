import { addCommand, addCommandCallback } from '../utils';

const cordial = {
  unsetContact: function (params: any) {
    if (params && params.callback) {
      return addCommandCallback('median://cordial/unsetContact', params);
    } else addCommand('median://cordial/unsetContact', params);
  },
  setContact: function (params: any) {
    if (params && params.callback) {
      return addCommandCallback('median://cordial/setContact', params);
    } else addCommand('median://cordial/setContact', params);
  },
  permissionStatus: function (params: any) {
    return addCommandCallback('median://cordial/permissionStatus', params, true);
  },
  requestPermission: function (params: any) {
    return addCommandCallback('median://cordial/requestPermission', params, true);
  },
};

export default cordial;
