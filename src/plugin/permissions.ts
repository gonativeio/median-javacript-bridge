import { addCommand, addCommandCallback } from '../utilities';

const permissions = {
  requestPhoneCallMgmt: function (params: any) {
    if (params.callback) {
      return addCommandCallback('median://permissions/requestPhoneCallMgmt', params);
    } else addCommand('median://permissions/requestPhoneCallMgmt', params);
  },
};

export default permissions;