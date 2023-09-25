import { addCommand } from "../utilities";

const firebaseAnalytics = {
  event: {
    collection: function (bool) {
      addCommand("median://firebaseAnalytics/event/collection?enabled=" + bool);
    },
    setUser: function (params) {
      addCommand("median://firebaseAnalytics/event/setUser", params);
    },
    setUserProperty: function (params) {
      addCommand("median://firebaseAnalytics/event/setUserProperty", params);
    },
    defaultEventParameters: function (params) {
      addCommand(
        "median://firebaseAnalytics/event/defaultEventParameters",
        params
      );
    },
    logEvent: function (params) {
      addCommand("median://firebaseAnalytics/event/logEvent", params);
    },
    logScreen: function (params) {
      addCommand("median://firebaseAnalytics/event/logScreen", params);
    },
    viewItem: function (params) {
      addCommand("median://firebaseAnalytics/event/viewItem", params);
    },
    addToWishlist: function (params) {
      addCommand("median://firebaseAnalytics/event/addToWishlist", params);
    },
    addToCart: function (params) {
      addCommand("median://firebaseAnalytics/event/addToCart", params);
    },
    removeFromCart: function (params) {
      addCommand("median://firebaseAnalytics/event/removeFromCart", params);
    },
  },
};

export default firebaseAnalytics;
