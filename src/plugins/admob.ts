import { addCommand, addCommandCallback } from '../utils';

type AdmobRequestTrackingResult = { status: 'authorized' | 'denied' | 'restricted' };

type AdmobRequestTrackingParams = {
  callback: (data: AdmobRequestTrackingResult) => void;
};

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
    tracking: function (params: AdmobRequestTrackingParams) {
      return addCommandCallback<AdmobRequestTrackingResult>('median://admob/request/tracking', params);
    },
  },
};

export default admob;
