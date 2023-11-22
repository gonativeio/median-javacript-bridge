import * as plugins from './plugin';
import { general, ios, android } from './commands';

class Median {
  isNativeApp = () => {
    return !!window?.webkit?.messageHandlers?.JSBridge || !!window?.JSBridge;
  };

  #onReadyCallback?: () => void;
  onReady = (callback: () => void) => {
    if (typeof callback === 'function') {
      this.#onReadyCallback = callback;
      let counter = 0;

      const intervalFunction = setInterval(() => {
        counter += 1;

        if (this.isNativeApp() && this.#onReadyCallback) {
          this.#onReadyCallback();
          this.#onReadyCallback = undefined;
        }

        if (counter >= 50 || !this.#onReadyCallback) {
          clearInterval(intervalFunction);
        }
      }, 100);
    }
  };

  ios = ios;
  android = android;

  // General
  clipboard = general.clipboard;
  config = general.config;
  connectivity = general.connectivity;
  deviceInfo = general.deviceInfo;
  internalExternal = general.internalExternal;
  keyboard = general.keyboard;
  nativebridge = general.nativebridge;
  navigationLevels = general.navigationLevels;
  navigationMaxWindows = general.navigationMaxWindows;
  navigationTitles = general.navigationTitles;
  open = general.open;
  registration = general.registration;
  run = general.run;
  screen = general.screen;
  share = general.share;
  sidebar = general.sidebar;
  statusbar = general.statusbar;
  tabNavigation = general.tabNavigation;
  webconsolelogs = general.webconsolelogs;
  webview = general.webview;
  window = general.window;

  // Plugins
  admob = plugins.admob;
  appreview = plugins.appreview;
  appsflyer = plugins.appsflyer;
  auth = plugins.auth;
  auth0 = plugins.auth0;
  autorefresh = plugins.autorefresh;
  backgroundLocation = plugins.backgroundLocation;
  backgroundMedia = plugins.backgroundMedia;
  barcode = plugins.barcode;
  beacon = plugins.beacon;
  braze = plugins.braze;
  card_io = plugins.card_io;
  contacts = plugins.contacts;
  cordial = plugins.cordial;
  documentScanner = plugins.documentScanner;
  downloads = plugins.downloads;
  esmiley = plugins.esmiley;
  facebook = plugins.facebook;
  firebaseAnalytics = plugins.firebaseAnalytics;
  haptics = plugins.haptics;
  iap = plugins.iap;
  intercom = plugins.intercom;
  kaltura = plugins.kaltura;
  localpreferences = plugins.localpreferences;
  modal = plugins.modal;
  moengage = plugins.moengage;
  moxo = plugins.moxo;
  onesignal = plugins.onesignal;
  opentok = plugins.opentok;
  permissions = plugins.permissions;
  plaid = plugins.plaid;
  purchase = plugins.purchase;
  socialLogin = plugins.socialLogin;
  storage = plugins.storage;
  twilio = plugins.twilio;
}

export default new Median();
