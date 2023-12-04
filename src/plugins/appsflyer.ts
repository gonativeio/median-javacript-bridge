import { AnyData } from '../types';
import { addCommand } from '../utils';

const appsflyer = {
  logEvent: function (eventName: string, eventValues: AnyData) {
    addCommand('median://appsflyer/logEvent', { eventName, eventValues });
  },
  setCustomerUserId: function (userId: string) {
    addCommand('median://appsflyer/setCustomerUserId', { userId });
  },
};

export default appsflyer;
