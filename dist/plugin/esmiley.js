"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const esmiley = {
    scan: function (timeout) {
        return (0, utilities_1.addCommandCallback)("median://esmiley/scan", { timeout });
    },
    connect: function (deviceId) {
        return (0, utilities_1.addCommandCallback)("median://esmiley/connect", { deviceId });
    },
    disconnect: function () {
        (0, utilities_1.addCommand)("median://esmiley/disconnect");
    },
    send: function (object) {
        return (0, utilities_1.addCommandCallback)("median://esmiley/send", { object });
    },
};
exports.default = esmiley;
//# sourceMappingURL=esmiley.js.map