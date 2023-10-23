"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const appsflyer = {
    logEvent: function (eventName, eventValues) {
        (0, utilities_1.addCommand)("median://appsflyer/logEvent", { eventName, eventValues });
    },
    setCustomerUserId: function (userId) {
        (0, utilities_1.addCommand)("median://appsflyer/setCustomerUserId", { userId });
    },
};
exports.default = appsflyer;
//# sourceMappingURL=appsflyer.js.map