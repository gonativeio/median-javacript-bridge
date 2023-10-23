"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const documentScanner = {
    scanPage: function (params) {
        if (params.callback) {
            return (0, utilities_1.addCommandCallback)("median://documentScanner/scanPage", params);
        }
        else
            (0, utilities_1.addCommand)("median://documentScanner/scanPage", params);
    },
    init: function (params) {
        (0, utilities_1.addCommand)("median://documentScanner/scanPage", params);
    },
};
exports.default = documentScanner;
//# sourceMappingURL=documentScanner.js.map