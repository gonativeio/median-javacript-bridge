"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const opentok = {
    video: {
        join: function (params) {
            if (params.callback) {
                return (0, utilities_1.addCommandCallback)("median://opentok/video/join", params);
            }
            else
                (0, utilities_1.addCommand)("median://opentok/video/join", params);
        },
    },
};
exports.default = opentok;
//# sourceMappingURL=opentok.js.map