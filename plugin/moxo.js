import { addCommand, addCommandCallback } from "../utilities";

const moxo = {
  login: function (params) {
    return addCommandCallback("median://moxo/login", params, true);
  },
  registerNotifications: function (params) {
    return addCommandCallback(
      "median://moxo/registerNotifications",
      params,
      true
    );
  },
  requestPermission: function (params) {
    return addCommandCallback(
      "median://moxo/registerNotifications",
      params,
      true
    );
  },
  permissionStatus: function (params) {
    return addCommandCallback("median://moxo/permissionStatus", params, true);
  },
  isLinked: function (params) {
    return addCommandCallback("median://moxo/isLinked", params, true);
  },
  unlink: function (params) {
    return addCommandCallback("median://moxo/unlink", params, true);
  },
  localUnlink: function (params) {
    return addCommandCallback("median://moxo/localUnlink", params, true);
  },
  showDashboard: function () {
    addCommand("median://moxo/showDashboard");
  },
  openLiveChatWithCompletion: function () {
    addCommand("median://moxo/openLiveChatWithCompletion");
  },
  openLiveChatWithChannelId: function (params) {
    addCommand("median://moxo/openLiveChatWithChannelId", params);
  },
  openChat: function (params) {
    addCommand("median://moxo/openChat", params);
  },
  getUnreadMessageCount: function (params) {
    return addCommandCallback("median://moxo/getUnreadMessageCount", params);
  },
};

export default moxo;
