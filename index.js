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

const median = {
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
};

class Median {
  isNativeApp = () => {
    return (
      window &&
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.JSBridge
    );
  };

  onReady = (callback) => {
    if (typeof callback === "function") {
      let counter = 0;

      const intervalFunction = setInterval(() => {
        counter += 1;

        if (this.isNativeApp()) {
          callback();
          counter = 50;
        }

        if (counter >= 50) {
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
