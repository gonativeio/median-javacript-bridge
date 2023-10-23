"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const contacts = {
    getAll: function (params) {
        return (0, utilities_1.addCommandCallback)("median://contacts/getAll", params);
    },
    getPermissionStatus: function (params) {
        return (0, utilities_1.addCommandCallback)("median://contacts/getPermissionStatus", params);
    },
};
exports.default = contacts;
//# sourceMappingURL=contacts.js.map