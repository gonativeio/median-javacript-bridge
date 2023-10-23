"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const twilio = {
    video: {
        join: function (params) {
            if (params.callback) {
                return (0, utilities_1.addCommandCallback)("median://twilio/video/join", params);
            }
            else
                (0, utilities_1.addCommand)("median://twilio/video/join", params);
        },
    },
};
exports.default = twilio;
//# sourceMappingURL=twilio.js.map