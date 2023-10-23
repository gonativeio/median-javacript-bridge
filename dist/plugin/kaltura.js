"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const kaltura = {
    play: function (params) {
        (0, utilities_1.addCommand)("median://kaltura/play", params);
    },
};
exports.default = kaltura;
//# sourceMappingURL=kaltura.js.map