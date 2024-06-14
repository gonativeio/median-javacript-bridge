import * as plugins from './plugins';
import { android, general, ios } from './commands';
import { BranchInitializedData } from './plugins/branch';
import { InAppPurchaseInfoReadyData } from './plugins/iap';
import { ShareToAppData } from './plugins/share';
import { AnyData } from './types';
import { createListener } from './utils';

class Median {
  // General
  ios = ios;
  android = android;
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
  branch = plugins.branch;
  calendar = plugins.calendar;
  card_io = plugins.card_io;
  contacts = plugins.contacts;
  cordial = plugins.cordial;
  documentScanner = plugins.documentScanner;
  downloads = plugins.downloads;
  esmiley = plugins.esmiley;
  facebook = plugins.facebook;
  firebaseAnalytics = plugins.firebaseAnalytics;
  firebaseCrashlytics = plugins.firebaseCrashlytics;
  haptics = plugins.haptics;
  iap = plugins.iap;
  intercom = plugins.intercom;
  iterable = plugins.iterable;
  kaltura = plugins.kaltura;
  keychainSwift = plugins.keychainSwift;
  localpreferences = plugins.localpreferences;
  modal = plugins.modal;
  moengage = plugins.moengage;
  moxo = plugins.moxo;
  msdynamics = plugins.msdynamics;
  nfc = plugins.nfc;
  onesignal = plugins.onesignal;
  opentok = plugins.opentok;
  permissions = plugins.permissions;
  plaid = plugins.plaid;
  purchase = plugins.iap.purchase;
  revenueCat = plugins.revenueCat;
  socialLogin = plugins.socialLogin;
  storage = {
    app: plugins.localpreferences.nonpersistent,
    cloud: plugins.localpreferences.persistent,
    filesystem: plugins.localpreferences.filesystem,
  };
  twilio = plugins.twilio;
  zoom = plugins.zoom;

  // Median Functions
  isNativeApp = () => {
    return !!window?.webkit?.messageHandlers?.JSBridge || !!window?.JSBridge;
  };

  getPlatform = async () => {
    if (!this.isNativeApp()) {
      return 'web';
    }
    const deviceInfo = await general.deviceInfo();
    return deviceInfo?.platform;
  };

  onReady = (callback: () => void) => {
    if (typeof callback === 'function') {
      let callbackFunction: (() => void) | null = callback;
      let counter = 0;

      const intervalFunction = setInterval(() => {
        if (this.isNativeApp() && callbackFunction) {
          callbackFunction();
          callbackFunction = null;
          return;
        }

        counter += 1;
        if (counter >= 20 || !callbackFunction) {
          clearInterval(intervalFunction);
          return;
        }
      }, 500);
    }
  };

  appResumed = createListener('_median_app_resumed');
  branchInitialized = createListener<BranchInitializedData>('_median_branch_initialized');
  deviceShake = createListener('_median_device_shake');
  iapInfoReady = createListener<InAppPurchaseInfoReadyData>('_median_info_ready');
  iapPurchases = createListener<AnyData>('_median_iap_purchases');
  oneSignalPushOpened = createListener<AnyData>('_median_onesignal_push_opened');
  shareToApp = createListener<ShareToAppData>('_median_share_to_app');

  jsNavigation = {
    url: createListener<{ url: string }>('_median_url_changed'),
  };
}

export default new Median();
