"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const socialLogin = {
    facebook: {
        login: function (params) {
            if (params.callback) {
                return (0, utilities_1.addCommandCallback)("median://socialLogin/facebook/login", params);
            }
            else
                (0, utilities_1.addCommand)("median://socialLogin/facebook/login", params);
        },
        logout: function (params) {
            if (params.callback) {
                return (0, utilities_1.addCommandCallback)("median://socialLogin/facebook/logout", params);
            }
            else
                (0, utilities_1.addCommand)("median://socialLogin/facebook/logout", params);
        },
    },
    google: {
        login: function (params) {
            if (params.callback) {
                return (0, utilities_1.addCommandCallback)("median://socialLogin/google/login", params);
            }
            else
                (0, utilities_1.addCommand)("median://socialLogin/google/login", params);
        },
        logout: function (params) {
            if (params.callback) {
                return (0, utilities_1.addCommandCallback)("median://socialLogin/google/logout", params);
            }
            else
                (0, utilities_1.addCommand)("median://socialLogin/google/logout", params);
        },
    },
    apple: {
        login: function (params) {
            if (params.callback) {
                return (0, utilities_1.addCommandCallback)("median://socialLogin/apple/login", params);
            }
            else
                (0, utilities_1.addCommand)("median://socialLogin/apple/login", params);
        },
    },
};
exports.default = socialLogin;
//# sourceMappingURL=socialLogin.js.map