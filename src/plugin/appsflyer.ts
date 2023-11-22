import { addCommand } from '../utils';

const appsflyer = {
  logEvent: function (eventName: any, eventValues: any) {
    addCommand('median://appsflyer/logEvent', { eventName, eventValues });
  },
  setCustomerUserId: function (userId: any) {
    addCommand('median://appsflyer/setCustomerUserId', { userId });
  },
};

export default appsflyer;
