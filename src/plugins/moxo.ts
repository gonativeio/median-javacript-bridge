import { CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type MoxoResult = { success: boolean; error?: string };

type MoxoNotificationResult = { granted: boolean };

type MoxoNotificationParams = CallbackParams<MoxoNotificationResult>;

type MoxoRegisterPushResult = { granted?: string; success?: boolean; error?: string };

const moxo = {
  login: function (params: CallbackParams<MoxoResult> & { accessToken: string }) {
    return addCommandCallback<MoxoResult>('median://moxo/login', params, true);
  },
  registerNotifications: function (params: CallbackParams<MoxoNotificationResult>) {
    return addCommandCallback<MoxoRegisterPushResult>('median://moxo/registerNotifications', params, true);
  },
  requestPermission: function (params: MoxoNotificationParams) {
    return addCommandCallback<MoxoNotificationResult>('median://moxo/registerNotifications', params, true);
  },
  permissionStatus: function (params: MoxoNotificationParams) {
    return addCommandCallback<MoxoNotificationResult>('median://moxo/permissionStatus', params, true);
  },
  isLinked: function (params: CallbackParams<{ isLinked: boolean }>) {
    return addCommandCallback<{ isLinked: boolean }>('median://moxo/isLinked', params, true);
  },
  unlink: function (params: CallbackParams<MoxoResult>) {
    return addCommandCallback<MoxoResult>('median://moxo/unlink', params, true);
  },
  localUnlink: function (params: CallbackParams<MoxoResult>) {
    return addCommandCallback<MoxoResult>('median://moxo/localUnlink', params, true);
  },
  showDashboard: function () {
    addCommand('median://moxo/showDashboard');
  },
  openLiveChatWithCompletion: function () {
    addCommand('median://moxo/openLiveChatWithCompletion');
  },
  openLiveChatWithChannelId: function (params: { channelId: string; message?: string }) {
    addCommand('median://moxo/openLiveChatWithChannelId', params);
  },
  openChat: function (params: { chatId: string; feedSequence?: string | number }) {
    addCommand('median://moxo/openChat', params);
  },
  getUnreadMessageCount: function (params: CallbackParams<{ count: number }>) {
    return addCommandCallback<{ count: number }>('median://moxo/getUnreadMessageCount', params);
  },
};

export default moxo;
