import {
  admob,
  appreview,
  appsflyer,
  auth,
  auth0,
  autorefresh,
  backgroundLocation,
  backgroundMedia,
  barcode,
  beacon,
  braze,
  card_io,
  contacts,
  cordial,
  documentScanner,
  downloads,
  esmiley,
  facebook,
  firebaseAnalytics,
  haptics,
  iap,
  intercom,
  kaltura,
  localpreferences,
  modal,
  moengage,
  moxo,
  nativebridge,
  onesignal,
  opentok,
  permissions,
  plaid,
  purchase,
  socialLogin,
  storage,
  twilio,
} from "./plugin";

declare global {
  interface Window {
    webkit?: {
      messageHandlers?: {
        JSBridge?: any;
      };
    };
  }
}

class Median {
  isNativeApp = () => {
    return (
      window &&
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.JSBridge
    );
  };

  #onReadyCallback: Function | undefined;
  onReady = (callback: Function) => {
    if (typeof callback === "function") {
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

  admob = admob;
  appreview = appreview;
  appsflyer = appsflyer;
  auth = auth;
  auth0 = auth0;
  autorefresh = autorefresh;
  backgroundLocation = backgroundLocation;
  backgroundMedia = backgroundMedia;
  barcode = barcode;
  beacon = beacon;
  braze = braze;
  card_io = card_io;
  contacts = contacts;
  cordial = cordial;
  documentScanner = documentScanner;
  downloads = downloads;
  esmiley = esmiley;
  facebook = facebook;
  firebaseAnalytics = firebaseAnalytics;
  haptics = haptics;
  iap = iap;
  intercom = intercom;
  kaltura = kaltura;
  localpreferences = localpreferences;
  modal = modal;
  moengage = moengage;
  moxo = moxo;
  nativebridge = nativebridge;
  onesignal = onesignal;
  opentok = opentok;
  permissions = permissions;
  plaid = plaid;
  purchase = purchase;
  socialLogin = socialLogin;
  storage = storage;
  twilio = twilio;
}

export default new Median();
