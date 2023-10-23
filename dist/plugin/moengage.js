"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const moengage = {
    notificationEnabled: function (params) {
        return (0, utilities_1.addCommandCallback)("median://moengage/notificationEnabled", params, true);
    },
    promptNotification: function (params) {
        return (0, utilities_1.addCommandCallback)("median://moengage/promptNotification", params, true);
    },
    setUniqueID: function (uniqueId) {
        return (0, utilities_1.addCommandCallback)("median://moengage/setUniqueID", { uniqueId }, true);
    },
    resetUser: function () {
        return (0, utilities_1.addCommandCallback)("median://moengage/resetUser");
    },
    setAlias: function (alias) {
        return (0, utilities_1.addCommandCallback)("median://moengage/setAlias", { alias }, true);
    },
    trackEvent: function (eventName, eventData) {
        return (0, utilities_1.addCommandCallback)("median://moengage/trackEvent", { eventName, eventData }, true);
    },
    launchInbox: function () {
        return (0, utilities_1.addCommandCallback)("median://moengage/launchInbox");
    },
};
exports.default = moengage;
//# sourceMappingURL=moengage.js.map