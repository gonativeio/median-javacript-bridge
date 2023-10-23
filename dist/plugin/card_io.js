"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const card_io = {
    scanCard: function (params) {
        return (0, utilities_1.addCommandCallback)("median://card.io/scanCard", params);
    },
};
exports.default = card_io;
//# sourceMappingURL=card_io.js.map