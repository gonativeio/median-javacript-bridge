import { CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';

const permissions = {
  requestPhoneCallMgmt: function (params: CallbackParams) {
    if (params?.callback) {
      return addCommandCallback('median://permissions/requestPhoneCallMgmt', params);
    }
    addCommand('median://permissions/requestPhoneCallMgmt', params);
  },
};

export default permissions;
