"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const moxo = {
    login: function (params) {
        return (0, utilities_1.addCommandCallback)("median://moxo/login", params, true);
    },
    registerNotifications: function (params) {
        return (0, utilities_1.addCommandCallback)("median://moxo/registerNotifications", params, true);
    },
    requestPermission: function (params) {
        return (0, utilities_1.addCommandCallback)("median://moxo/registerNotifications", params, true);
    },
    permissionStatus: function (params) {
        return (0, utilities_1.addCommandCallback)("median://moxo/permissionStatus", params, true);
    },
    isLinked: function (params) {
        return (0, utilities_1.addCommandCallback)("median://moxo/isLinked", params, true);
    },
    unlink: function (params) {
        return (0, utilities_1.addCommandCallback)("median://moxo/unlink", params, true);
    },
    localUnlink: function (params) {
        return (0, utilities_1.addCommandCallback)("median://moxo/localUnlink", params, true);
    },
    showDashboard: function () {
        (0, utilities_1.addCommand)("median://moxo/showDashboard");
    },
    openLiveChatWithCompletion: function () {
        (0, utilities_1.addCommand)("median://moxo/openLiveChatWithCompletion");
    },
    openLiveChatWithChannelId: function (params) {
        (0, utilities_1.addCommand)("median://moxo/openLiveChatWithChannelId", params);
    },
    openChat: function (params) {
        (0, utilities_1.addCommand)("median://moxo/openChat", params);
    },
    getUnreadMessageCount: function (params) {
        return (0, utilities_1.addCommandCallback)("median://moxo/getUnreadMessageCount", params);
    },
};
exports.default = moxo;
//# sourceMappingURL=moxo.js.map