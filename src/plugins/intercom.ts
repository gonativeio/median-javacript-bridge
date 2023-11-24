import { AnyData, CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type IntercomUpdateUserParams = {
  userId?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
};

type IntercomNotificationResult = { granted: boolean };

type IntercomNotificationParams = CallbackParams<IntercomNotificationResult>;

type IntercomLogEventParams = Record<string, AnyData> & {
  eventName: string;
};

const intercom = {
  registerPush: function (params: IntercomNotificationParams) {
    return addCommandCallback<IntercomNotificationResult>('median://intercom/registerPush', params);
  },
  updateUser: function (params: IntercomUpdateUserParams) {
    addCommand('median://intercom/updateUser', params);
  },
  logEvent: function (params: IntercomLogEventParams) {
    addCommand('median://intercom/logEvent', params);
  },
  logout: function () {
    addCommand('median://intercom/logout');
  },
  presentCarousel: function (params: { carouselID: string }) {
    addCommand('median://intercom/presentCarousel', params);
  },
  permissionStatus: function (params: IntercomNotificationParams) {
    return addCommandCallback<IntercomNotificationResult>('median://intercom/permissionStatus', params, true);
  },
  requestPermission: function (params: IntercomNotificationParams) {
    return addCommandCallback<IntercomNotificationResult>('median://intercom/registerPush', params, true);
  },
};

export default intercom;
