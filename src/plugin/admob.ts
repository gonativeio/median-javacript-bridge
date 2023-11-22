import { addCommand, addCommandCallback } from '../utils';

const admob = {
  showInterstitialIfReady: function () {
    addCommand('median://admob/showInterstitialIfReady');
  },
  showInterstitialOnNextPageLoadIfReady: function () {
    addCommand('median://admob/showInterstitialOnNextPageLoadIfReady');
  },
  banner: {
    enable: function () {
      addCommand('median://admob/banner/enable');
    },
    disable: function () {
      addCommand('median://admob/banner/disable');
    },
  },
  request: {
    tracking: function (params: any) {
      return addCommandCallback('median://admob/request/tracking', params);
    },
  },
};

export default admob;
