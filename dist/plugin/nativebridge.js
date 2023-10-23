"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const nativebridge = {
    custom: function (params) {
        (0, utilities_1.addCommand)("median://nativebridge/custom", params);
    },
};
exports.default = nativebridge;
//# sourceMappingURL=nativebridge.js.map