"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const firebaseAnalytics = {
    event: {
        collection: function (bool) {
            (0, utilities_1.addCommand)("median://firebaseAnalytics/event/collection?enabled=" + bool);
        },
        setUser: function (params) {
            (0, utilities_1.addCommand)("median://firebaseAnalytics/event/setUser", params);
        },
        setUserProperty: function (params) {
            (0, utilities_1.addCommand)("median://firebaseAnalytics/event/setUserProperty", params);
        },
        defaultEventParameters: function (params) {
            (0, utilities_1.addCommand)("median://firebaseAnalytics/event/defaultEventParameters", params);
        },
        logEvent: function (params) {
            (0, utilities_1.addCommand)("median://firebaseAnalytics/event/logEvent", params);
        },
        logScreen: function (params) {
            (0, utilities_1.addCommand)("median://firebaseAnalytics/event/logScreen", params);
        },
        viewItem: function (params) {
            (0, utilities_1.addCommand)("median://firebaseAnalytics/event/viewItem", params);
        },
        addToWishlist: function (params) {
            (0, utilities_1.addCommand)("median://firebaseAnalytics/event/addToWishlist", params);
        },
        addToCart: function (params) {
            (0, utilities_1.addCommand)("median://firebaseAnalytics/event/addToCart", params);
        },
        removeFromCart: function (params) {
            (0, utilities_1.addCommand)("median://firebaseAnalytics/event/removeFromCart", params);
        },
    },
};
exports.default = firebaseAnalytics;
//# sourceMappingURL=firebaseAnalytics.js.map