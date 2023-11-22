import { addCommand, addCommandCallback } from '../utils';

const braze = {
  changeUser: function (params: any) {
    return addCommandCallback('median://braze/changeUser', params, true);
  },
  notificationEnabled: function (params: any) {
    return addCommandCallback('median://braze/notificationEnabled', params, true);
  },
  promptNotification: function (params: any) {
    return addCommandCallback('median://braze/promptNotification', params, true);
  },
  logCustomEvent: function (eventName: any, data: any) {
    const params = {
      eventName: eventName,
      data: data,
    };
    addCommand('median://braze/logCustomEvent', params);
  },
};

export default braze;
