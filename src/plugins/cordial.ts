import { CallbackData, CallbackParams, PermissionStatusData } from '../types';
import { addCommandCallback } from '../utils';

const cordial = {
  setContact: function (params: CallbackParams<CallbackData>) {
    return addCommandCallback<CallbackData>('median://cordial/setContact', params);
  },
  unsetContact: function (params: CallbackParams<CallbackData>) {
    return addCommandCallback<CallbackData>('median://cordial/unsetContact', params);
  },
  permissionStatus: function (params: CallbackParams<PermissionStatusData>) {
    return addCommandCallback<PermissionStatusData>('median://cordial/permissionStatus', params, true);
  },
  requestPermission: function (params: CallbackParams<PermissionStatusData>) {
    return addCommandCallback<PermissionStatusData>('median://cordial/requestPermission', params, true);
  },
};

export default cordial;
