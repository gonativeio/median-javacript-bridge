"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const downloads = {
    init: function (params) {
        return (0, utilities_1.addCommandCallback)("median://downloads/init", params);
    },
    downloadFile: function (params) {
        (0, utilities_1.addCommand)("median://downloads/downloadFile", params);
    },
    showUI: function () {
        (0, utilities_1.addCommand)("median://downloads/showUI");
    },
};
exports.default = downloads;
//# sourceMappingURL=downloads.js.map