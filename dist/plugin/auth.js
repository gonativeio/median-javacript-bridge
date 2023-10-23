"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const auth = {
    status: function (params) {
        return (0, utilities_1.addCommandCallback)("median://auth/status", params);
    },
    save: function (params) {
        if (!(typeof params.secret === "string")) {
            params.secret = JSON.stringify(params.secret);
        }
        (0, utilities_1.addCommand)("median://auth/save", params);
    },
    get: function (params) {
        (0, utilities_1.addCommand)("median://auth/get", params);
    },
    delete: function (params) {
        (0, utilities_1.addCommand)("median://auth/delete", params);
    },
};
exports.default = auth;
//# sourceMappingURL=auth.js.map