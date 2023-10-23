"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const plaid = {
    linkBank: function (params) {
        return (0, utilities_1.addCommandCallback)("median://plaid/linkBank", params);
    },
    verifyIdentity: function (params) {
        return (0, utilities_1.addCommandCallback)("median://plaid/verifyIdentity", params);
    },
};
exports.default = plaid;
//# sourceMappingURL=plaid.js.map