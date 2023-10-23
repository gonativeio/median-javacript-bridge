"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const appreview = {
    prompt: function (params) {
        if (params === null || params === void 0 ? void 0 : params.callback) {
            return (0, utilities_1.addCommandCallback)("median://appReview/prompt", params);
        }
        else
            (0, utilities_1.addCommand)("median://appReview/prompt");
    },
};
exports.default = appreview;
//# sourceMappingURL=appreview.js.map