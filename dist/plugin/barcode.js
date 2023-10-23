"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const barcode = {
    scan: function (params) {
        return (0, utilities_1.addCommandCallback)("median://barcode/scan", params);
    },
    setPrompt: function (params) {
        return (0, utilities_1.addCommand)("median://barcode/setPrompt", { prompt: params });
    },
};
exports.default = barcode;
//# sourceMappingURL=barcode.js.map