"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const braze = {
    changeUser: function (params) {
        return (0, utilities_1.addCommandCallback)("median://braze/changeUser", params, true);
    },
    notificationEnabled: function (params) {
        return (0, utilities_1.addCommandCallback)("median://braze/notificationEnabled", params, true);
    },
    promptNotification: function (params) {
        return (0, utilities_1.addCommandCallback)("median://braze/promptNotification", params, true);
    },
    logCustomEvent: function (eventName, data) {
        var params = {
            eventName: eventName,
            data: data,
        };
        (0, utilities_1.addCommand)("median://braze/logCustomEvent", params);
    },
};
exports.default = braze;
//# sourceMappingURL=braze.js.map