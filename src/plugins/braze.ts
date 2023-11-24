import { AnyData, CallbackData, CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type BrazeChangeUserParams = CallbackParams<CallbackData> & { userId: string };

type BrazeNotificationResult = { granted: boolean };

type BrazeNotificationParams = CallbackParams<BrazeNotificationResult>;

const braze = {
  changeUser: function (params: BrazeChangeUserParams) {
    return addCommandCallback<CallbackData>('median://braze/changeUser', params, true);
  },
  notificationEnabled: function (params: BrazeNotificationParams) {
    return addCommandCallback<BrazeNotificationResult>('median://braze/notificationEnabled', params, true);
  },
  promptNotification: function (params: BrazeNotificationParams) {
    return addCommandCallback<BrazeNotificationResult>('median://braze/promptNotification', params, true);
  },
  logCustomEvent: function (eventName: string, data: Record<string, AnyData>) {
    addCommand('median://braze/logCustomEvent', { eventName, data });
  },
};

export default braze;
