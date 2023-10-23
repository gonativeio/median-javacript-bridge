"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const backgroundLocation = {
    start: function (params) {
        (0, utilities_1.addCommand)("median://backgroundLocation/start", params, true);
    },
    stop: function () {
        (0, utilities_1.addCommand)("median://backgroundLocation/stop");
    },
};
exports.default = backgroundLocation;
//# sourceMappingURL=backgroundLocation.js.map