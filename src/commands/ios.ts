import { CallbackParams, PermissionStatusData } from '../types';
import { addCommand, addCommandCallback } from '../utils';

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
    request: function (params: CallbackParams<PermissionStatusData>) {
      return addCommandCallback<PermissionStatusData>('median://ios/attconsent/request', params);
    },
    status: function (params: CallbackParams<PermissionStatusData>) {
      return addCommandCallback<PermissionStatusData>('median://ios/attconsent/status', params);
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
