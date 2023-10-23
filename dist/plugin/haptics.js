"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const haptics = {
    trigger: function (params) {
        (0, utilities_1.addCommand)("median://haptics/trigger", params);
    },
};
exports.default = haptics;
//# sourceMappingURL=haptics.js.map