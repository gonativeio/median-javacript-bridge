import { addCommand, addCommandCallback } from "../utilities";

const admob = {
  showInterstitialIfReady: function () {
    addCommand("mdian://admob/showInterstitialIfReady");
  },
  showInterstitialOnNextPageLoadIfReady: function () {
    addCommand("median://admob/showInterstitialOnNextPageLoadIfReady");
  },
  banner: {
    enable: function () {
      addCommand("median://admob/banner/enable");
    },
    disable: function () {
      addCommand("median://admob/banner/disable");
    },
  },
  request: {
    tracking: function (params) {
      return addCommandCallback("median://admob/request/tracking", params);
    },
  },
};

export default admob;
