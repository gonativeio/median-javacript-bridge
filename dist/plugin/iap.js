"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const iap = {
    purchase: function (params) {
        var productID = params.productID;
        params.productID = null;
        return (0, utilities_1.addCommandCallback)("median://purchase/" + productID, params);
    },
    manageSubscription: function (params) {
        (0, utilities_1.addCommand)("median://iap/manageSubscription", params);
    },
    manageAllSubscriptions: function () {
        (0, utilities_1.addCommand)("median://iap/manageAllSubscriptions");
    },
    restorePurchases: function () {
        (0, utilities_1.addCommand)("median://iap/restorePurchases");
    },
    info: function () {
        return (0, utilities_1.addCommandCallback)("median://iap/info");
    },
    refresh: function () {
        (0, utilities_1.addCommand)("median://iap/refresh");
    },
};
exports.default = iap;
//# sourceMappingURL=iap.js.map