import { CallbackData, CallbackParams, PermissionStatusData } from '../types';
import { addCommand, addCommandCallback } from '../utils';

const cordial = {
  setContact: function (params: CallbackParams<CallbackData>) {
    if (params && params.callback) {
      return addCommandCallback<CallbackData>('median://cordial/setContact', params);
    }
    addCommand('median://cordial/setContact', params);
  },
  unsetContact: function (params: CallbackParams<CallbackData>) {
    if (params && params.callback) {
      return addCommandCallback<CallbackData>('median://cordial/unsetContact', params);
    }
    addCommand('median://cordial/unsetContact', params);
  },
  permissionStatus: function (params: CallbackParams<PermissionStatusData>) {
    return addCommandCallback<PermissionStatusData>('median://cordial/permissionStatus', params, true);
  },
  requestPermission: function (params: CallbackParams<PermissionStatusData>) {
    return addCommandCallback<PermissionStatusData>('median://cordial/requestPermission', params, true);
  },
};

export default cordial;
