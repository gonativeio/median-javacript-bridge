"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const admob = {
    showInterstitialIfReady: function () {
        (0, utilities_1.addCommand)("mdian://admob/showInterstitialIfReady");
    },
    showInterstitialOnNextPageLoadIfReady: function () {
        (0, utilities_1.addCommand)("median://admob/showInterstitialOnNextPageLoadIfReady");
    },
    banner: {
        enable: function () {
            (0, utilities_1.addCommand)("median://admob/banner/enable");
        },
        disable: function () {
            (0, utilities_1.addCommand)("median://admob/banner/disable");
        },
    },
    request: {
        tracking: function (params) {
            return (0, utilities_1.addCommandCallback)("median://admob/request/tracking", params);
        },
    },
};
exports.default = admob;
//# sourceMappingURL=admob.js.map