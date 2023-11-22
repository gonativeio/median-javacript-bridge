import { addCommand, addCommandCallback } from '../utils';

type AttConsentResult = { granted: boolean };

type AttConsentParams = { callback: (data: AttConsentResult) => void };

const ios = {
  window: {
    open: function (url: string) {
      addCommand('median://window/open', { url });
    },
    setWindowOpenHideNavbar: function (windowOpenHideNavbar: boolean) {
      addCommand('median://window/setWindowOpenHideNavbar', { windowOpenHideNavbar });
    },
  },
  geoLocation: {
    requestLocation: function () {
      addCommand('median://geolocationShim/requestLocation');
    },
    startWatchingLocation: function () {
      addCommand('median://geolocationShim/startWatchingLocation');
    },
    stopWatchingLocation: function () {
      addCommand('median://geolocationShim/stopWatchingLocation');
    },
  },
  attconsent: {
    request: function (params: AttConsentParams) {
      return addCommandCallback<AttConsentResult>('median://ios/attconsent/request', params);
    },
    status: function (params: AttConsentParams) {
      return addCommandCallback<AttConsentResult>('median://ios/attconsent/status', params);
    },
  },
  backgroundAudio: {
    start: function () {
      addCommand('median://backgroundAudio/start');
    },
    end: function () {
      addCommand('median://backgroundAudio/end');
    },
  },
  contextualNavToolbar: {
    set: function (params: { enabled: boolean }) {
      addCommand('median://ios/contextualNavToolbar/set', params);
    },
  },
};

export default ios;
