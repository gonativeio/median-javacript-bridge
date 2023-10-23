"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const beacon = {
    scan: function (params) {
        (0, utilities_1.addCommand)("median://beacon/scan", params);
    },
};
exports.default = beacon;
//# sourceMappingURL=beacon.js.map