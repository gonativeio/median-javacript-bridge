"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const facebook = {
    events: {
        send: function (params) {
            (0, utilities_1.addCommand)("median://facebook/events/send", params);
        },
        sendPurchase: function (params) {
            (0, utilities_1.addCommand)("median://facebook/events/sendPurchase", params);
        },
    },
};
exports.default = facebook;
//# sourceMappingURL=facebook.js.map