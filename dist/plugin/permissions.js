"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const permissions = {
    requestPhoneCallMgmt: function (params) {
        if (params.callback) {
            return (0, utilities_1.addCommandCallback)("median://permissions/requestPhoneCallMgmt", params);
        }
        else
            (0, utilities_1.addCommand)("median://permissions/requestPhoneCallMgmt", params);
    },
};
exports.default = permissions;
//# sourceMappingURL=permissions.js.map