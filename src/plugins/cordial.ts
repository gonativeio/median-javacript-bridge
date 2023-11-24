import { CallbackData, CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type CordialNotificationResult = { granted: boolean };

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
  permissionStatus: function (params: CallbackParams<CordialNotificationResult>) {
    return addCommandCallback<CordialNotificationResult>('median://cordial/permissionStatus', params, true);
  },
  requestPermission: function (params: CallbackParams<CordialNotificationResult>) {
    return addCommandCallback<CordialNotificationResult>('median://cordial/requestPermission', params, true);
  },
};

export default cordial;
