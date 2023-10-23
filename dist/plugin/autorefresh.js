"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const autorefresh = {
    set: function (params) {
        (0, utilities_1.addCommand)("median://autorefresh/set", params);
    },
};
exports.default = autorefresh;
//# sourceMappingURL=autorefresh.js.map