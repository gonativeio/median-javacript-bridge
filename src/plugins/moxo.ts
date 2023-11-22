import { addCommand, addCommandCallback } from '../utils';

const moxo = {
  login: function (params: any) {
    return addCommandCallback('median://moxo/login', params, true);
  },
  registerNotifications: function (params: any) {
    return addCommandCallback('median://moxo/registerNotifications', params, true);
  },
  requestPermission: function (params: any) {
    return addCommandCallback('median://moxo/registerNotifications', params, true);
  },
  permissionStatus: function (params: any) {
    return addCommandCallback('median://moxo/permissionStatus', params, true);
  },
  isLinked: function (params: any) {
    return addCommandCallback('median://moxo/isLinked', params, true);
  },
  unlink: function (params: any) {
    return addCommandCallback('median://moxo/unlink', params, true);
  },
  localUnlink: function (params: any) {
    return addCommandCallback('median://moxo/localUnlink', params, true);
  },
  showDashboard: function () {
    addCommand('median://moxo/showDashboard');
  },
  openLiveChatWithCompletion: function () {
    addCommand('median://moxo/openLiveChatWithCompletion');
  },
  openLiveChatWithChannelId: function (params: any) {
    addCommand('median://moxo/openLiveChatWithChannelId', params);
  },
  openChat: function (params: any) {
    addCommand('median://moxo/openChat', params);
  },
  getUnreadMessageCount: function (params: any) {
    return addCommandCallback('median://moxo/getUnreadMessageCount', params);
  },
};

export default moxo;
