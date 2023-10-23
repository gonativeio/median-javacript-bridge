"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const auth0 = {
    loginUniversal: function (params) {
        (0, utilities_1.addCommand)("median://auth0/loginUniversal", params);
    },
    logout: function (params) {
        (0, utilities_1.addCommand)("median://auth0/logout", params);
    },
    status: function (params) {
        return (0, utilities_1.addCommandCallback)("median://auth0/status", params);
    },
    save: function (params) {
        if (typeof params.secret !== "string") {
            params.secret = JSON.stringify(params.secret);
        }
        (0, utilities_1.addCommand)("median://auth0/save", params);
    },
    profile: function (params) {
        (0, utilities_1.addCommandCallback)("median://auth0/profile", params);
    },
    get: function (params) {
        (0, utilities_1.addCommand)("median://auth0/get", params);
    },
    delete: function (params) {
        (0, utilities_1.addCommand)("median://auth0/delete", params);
    },
};
exports.default = auth0;
//# sourceMappingURL=auth0.js.map