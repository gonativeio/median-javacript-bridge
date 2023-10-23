"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const intercom = {
    registerPush: function (params) {
        return (0, utilities_1.addCommandCallback)("median://intercom/registerPush", params);
    },
    updateUser: function (params) {
        (0, utilities_1.addCommand)("median://intercom/updateUser", params);
    },
    logEvent: function (params) {
        (0, utilities_1.addCommand)("median://intercom/logEvent", params);
    },
    logout: function () {
        (0, utilities_1.addCommand)("median://intercom/logout");
    },
    presentCarousel: function (params) {
        (0, utilities_1.addCommand)("median://intercom/presentCarousel", params);
    },
    permissionStatus: function (params) {
        return (0, utilities_1.addCommandCallback)("median://intercom/permissionStatus", params, true);
    },
    requestPermission: function (params) {
        return (0, utilities_1.addCommandCallback)("median://intercom/registerPush", params, true);
    },
};
exports.default = intercom;
//# sourceMappingURL=intercom.js.map