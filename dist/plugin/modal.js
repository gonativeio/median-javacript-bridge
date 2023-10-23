"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const modal = {
    launch: function (params) {
        return (0, utilities_1.addCommandCallback)("median://modal/launch", params);
    },
};
exports.default = modal;
//# sourceMappingURL=modal.js.map