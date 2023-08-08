import { addCommand } from "./utilities";

const admob = {
  showInterstitialIfReady: function () {
    addCommand("gonative://admob/showInterstitialIfReady");
  },
  showInterstitialOnNextPageLoadIfReady: function () {
    addCommand("gonative://admob/showInterstitialOnNextPageLoadIfReady");
  },
  banner: {
    enable: function () {
      addCommand("gonative://admob/banner/enable");
    },
    disable: function () {
      addCommand("gonative://admob/banner/disable");
    },
  },
  request: {
    tracking: function (params) {
      return addCommandCallback("gonative://admob/request/tracking", params);
    },
  },
};

const appreview = {
  prompt: function (params) {
    if (params?.callback) {
      return addCommandCallback("gonative://appReview/prompt", params);
    } else addCommand("gonative://appReview/prompt");
  },
};

const appsflyer = {
  logEvent: function (eventName, eventValues) {
    addCommand("gonative://appsflyer/logEvent", { eventName, eventValues });
  },
  setCustomerUserId: function (userId) {
    addCommand("gonative://appsflyer/setCustomerUserId", { userId });
  },
};

const auth = {
  status: function (params) {
    return addCommandCallback("gonative://auth/status", params);
  },
  save: function (params) {
    if (!(typeof params.secret === "string")) {
      params.secret = JSON.stringify(params.secret);
    }
    addCommand("gonative://auth/save", params);
  },
  get: function (params) {
    addCommand("gonative://auth/get", params);
  },
  delete: function (params) {
    addCommand("gonative://auth/delete", params);
  },
};

const auth0 = {
  loginUniversal: function (params) {
    addCommand("gonative://auth0/loginUniversal", params);
  },
  logout: function (params) {
    addCommand("gonative://auth0/logout", params);
  },
  status: function (params) {
    return addCommandCallback("gonative://auth0/status", params);
  },
  save: function (params) {
    if (typeof params.secret !== "string") {
      params.secret = JSON.stringify(params.secret);
    }
    addCommand("gonative://auth0/save", params);
  },
  profile: function (params) {
    addCommandCallback("gonative://auth0/profile", params);
  },
  get: function (params) {
    addCommand("gonative://auth0/get", params);
  },
  delete: function (params) {
    addCommand("gonative://auth0/delete", params);
  },
};

const autorefresh = {
  set: function (params) {
    addCommand("gonative://autorefresh/set", params);
  },
};

const backgroundLocation = {
  start: function (params) {
    addCommand("gonative://backgroundLocation/start", params, true);
  },
  stop: function () {
    addCommand("gonative://backgroundLocation/stop");
  },
};

const backgroundMedia = {
  playTrack: function (params) {
    if (typeof params === "number") {
      params = {
        time: params,
      };
    }
    addCommand("gonative://backgroundMedia/playTrack", params);
  },
  streamPlaylist: function (params) {
    addCommand("gonative://backgroundMedia/streamPlaylist", params);
  },
  pause: function () {
    addCommand("gonative://backgroundMedia/pause");
  },
  stop: function () {
    addCommand("gonative://backgroundMedia/stop");
  },
  play: function () {
    addCommand("gonative://backgroundMedia/play");
  },
  resume: function () {
    addCommand("gonative://backgroundMedia/resume");
  },
  getPlayerStatus: function (params) {
    return addCommandCallback(
      "gonative://backgroundMedia/getPlayerStatus",
      params
    );
  },
};

const barcode = {
  scan: function (params) {
    return addCommandCallback("gonative://barcode/scan", params);
  },
  setPrompt: function (params) {
    return addCommand("gonative://barcode/setPrompt", { prompt: params });
  },
};

const beacon = {
  scan: function (params) {
    addCommand("gonative://beacon/scan", params);
  },
};

const braze = {
  changeUser: function (params) {
    return addCommandCallback("gonative://braze/changeUser", params, true);
  },
  notificationEnabled: function (params) {
    return addCommandCallback(
      "gonative://braze/notificationEnabled",
      params,
      true
    );
  },
  promptNotification: function (params) {
    return addCommandCallback(
      "gonative://braze/promptNotification",
      params,
      true
    );
  },
  logCustomEvent: function (eventName, data) {
    var params = {
      eventName: eventName,
      data: data,
    };
    addCommand("gonative://braze/logCustomEvent", params);
  },
};

const card_io = {
  scanCard: function (params) {
    return addCommandCallback("gonative://card.io/scanCard", params);
  },
};

const contacts = {
  getAll: function (params) {
    return addCommandCallback("gonative://contacts/getAll", params);
  },
  getPermissionStatus: function (params) {
    return addCommandCallback(
      "gonative://contacts/getPermissionStatus",
      params
    );
  },
};

const cordial = {
  unsetContact: function (params) {
    if (params && params.callback) {
      return addCommandCallback("gonative://cordial/unsetContact", params);
    } else addCommand("gonative://cordial/unsetContact", params);
  },
  setContact: function (params) {
    if (params && params.callback) {
      return addCommandCallback("gonative://cordial/setContact", params);
    } else addCommand("gonative://cordial/setContact", params);
  },
  permissionStatus: function (params) {
    return addCommandCallback(
      "gonative://cordial/permissionStatus",
      params,
      true
    );
  },
  requestPermission: function (params) {
    return addCommandCallback(
      "gonative://cordial/requestPermission",
      params,
      true
    );
  },
};

const documentScanner = {
  scanPage: function (params) {
    if (params.callback) {
      return addCommandCallback("gonative://documentScanner/scanPage", params);
    } else addCommand("gonative://documentScanner/scanPage", params);
  },
  init: function (params) {
    addCommand("gonative://documentScanner/scanPage", params);
  },
};

const downloads = {
  init: function (params) {
    return addCommandCallback("gonative://downloads/init", params);
  },
  downloadFile: function (params) {
    addCommand("gonative://downloads/downloadFile", params);
  },
  showUI: function () {
    addCommand("gonative://downloads/showUI");
  },
};

const esmiley = {
  scan: function (timeout) {
    return addCommandCallback("gonative://esmiley/scan", { timeout });
  },
  connect: function (deviceId) {
    return addCommandCallback("gonative://esmiley/connect", { deviceId });
  },
  disconnect: function () {
    addCommand("gonative://esmiley/disconnect");
  },
  send: function (object) {
    return addCommandCallback("gonative://esmiley/send", { object });
  },
};

const facebook = {
  events: {
    send: function (params) {
      addCommand("gonative://facebook/events/send", params);
    },
    sendPurchase: function (params) {
      addCommand("gonative://facebook/events/sendPurchase", params);
    },
  },
};

const firebaseAnalytics = {
  event: {
    collection: function (bool) {
      addCommand(
        "gonative://firebaseAnalytics/event/collection?enabled=" + bool
      );
    },
    setUser: function (params) {
      addCommand("gonative://firebaseAnalytics/event/setUser", params);
    },
    setUserProperty: function (params) {
      addCommand("gonative://firebaseAnalytics/event/setUserProperty", params);
    },
    defaultEventParameters: function (params) {
      addCommand(
        "gonative://firebaseAnalytics/event/defaultEventParameters",
        params
      );
    },
    logEvent: function (params) {
      addCommand("gonative://firebaseAnalytics/event/logEvent", params);
    },
    logScreen: function (params) {
      addCommand("gonative://firebaseAnalytics/event/logScreen", params);
    },
    viewItem: function (params) {
      addCommand("gonative://firebaseAnalytics/event/viewItem", params);
    },
    addToWishlist: function (params) {
      addCommand("gonative://firebaseAnalytics/event/addToWishlist", params);
    },
    addToCart: function (params) {
      addCommand("gonative://firebaseAnalytics/event/addToCart", params);
    },
    removeFromCart: function (params) {
      addCommand("gonative://firebaseAnalytics/event/removeFromCart", params);
    },
  },
};

const haptics = {
  trigger: function (params) {
    addCommand("gonative://haptics/trigger", params);
  },
};

const iap = {
  purchase: function (params) {
    var productID = params.productID;
    params.productID = null;
    return addCommandCallback("gonative://purchase/" + productID, params);
  },
  manageSubscription: function (params) {
    addCommand("gonative://iap/manageSubscription", params);
  },
  manageAllSubscriptions: function () {
    addCommand("gonative://iap/manageAllSubscriptions");
  },
  restorePurchases: function () {
    addCommand("gonative://iap/restorePurchases");
  },
  info: function () {
    return addCommandCallback("gonative://iap/info");
  },
  refresh: function () {
    addCommand("gonative://iap/refresh");
  },
};

const intercom = {
  registerPush: function (params) {
    return addCommandCallback("gonative://intercom/registerPush", params);
  },
  updateUser: function (params) {
    addCommand("gonative://intercom/updateUser", params);
  },
  logEvent: function (params) {
    addCommand("gonative://intercom/logEvent", params);
  },
  logout: function () {
    addCommand("gonative://intercom/logout");
  },
  presentCarousel: function (params) {
    addCommand("gonative://intercom/presentCarousel", params);
  },
  permissionStatus: function (params) {
    return addCommandCallback(
      "gonative://intercom/permissionStatus",
      params,
      true
    );
  },
  requestPermission: function (params) {
    return addCommandCallback("gonative://intercom/registerPush", params, true);
  },
};

const kaltura = {
  play: function (params) {
    addCommand("gonative://kaltura/play", params);
  },
};

const localpreferences = {
  nonpersistent: {
    set: function (params) {
      addCommand("gonative://localpreferences/nonpersistent/set", params);
    },
    get: function (params) {
      return addCommandCallback(
        "gonative://localpreferences/nonpersistent/get",
        params
      );
    },
    delete: function (params) {
      addCommand("gonative://localpreferences/nonpersistent/delete", params);
    },
    deleteAll: function (params) {
      addCommand("gonative://localpreferences/nonpersistent/deleteAll", params);
    },
  },
  persistent: {
    set: function (params) {
      addCommand("gonative://localpreferences/persistent/set", params);
    },
    get: function (params) {
      return addCommandCallback(
        "gonative://localpreferences/persistent/get",
        params
      );
    },
    delete: function (params) {
      addCommand("gonative://localpreferences/persistent/delete", params);
    },
    deleteAll: function (params) {
      addCommand("gonative://localpreferences/persistent/deleteAll", params);
    },
  },
  filesystem: {
    save: function (params) {
      addCommand("gonative://localpreferences/filesystem/save", params);
    },
    read: function (params) {
      return addCommandCallback(
        "gonative://localpreferences/filesystem/read",
        params
      );
    },
    delete: function (params) {
      addCommand("gonative://localpreferences/filesystem/delete", params);
    },
  },
};

const modal = {
  launch: function (params) {
    return addCommandCallback("gonative://modal/launch", params);
  },
};

const moengage = {
  notificationEnabled: function (params) {
    return addCommandCallback(
      "gonative://moengage/notificationEnabled",
      params,
      true
    );
  },
  promptNotification: function (params) {
    return addCommandCallback(
      "gonative://moengage/promptNotification",
      params,
      true
    );
  },
  setUniqueID: function (uniqueId) {
    return addCommandCallback(
      "gonative://moengage/setUniqueID",
      { uniqueId },
      true
    );
  },
  resetUser: function () {
    return addCommandCallback("gonative://moengage/resetUser");
  },
  setAlias: function (alias) {
    return addCommandCallback("gonative://moengage/setAlias", { alias }, true);
  },
  trackEvent: function (eventName, eventData) {
    return addCommandCallback(
      "gonative://moengage/trackEvent",
      { eventName, eventData },
      true
    );
  },
  launchInbox: function () {
    return addCommandCallback("gonative://moengage/launchInbox");
  },
};

const moxo = {
  login: function (params) {
    return addCommandCallback("gonative://moxo/login", params, true);
  },
  registerNotifications: function (params) {
    return addCommandCallback(
      "gonative://moxo/registerNotifications",
      params,
      true
    );
  },
  requestPermission: function (params) {
    return addCommandCallback(
      "gonative://moxo/registerNotifications",
      params,
      true
    );
  },
  permissionStatus: function (params) {
    return addCommandCallback("gonative://moxo/permissionStatus", params, true);
  },
  isLinked: function (params) {
    return addCommandCallback("gonative://moxo/isLinked", params, true);
  },
  unlink: function (params) {
    return addCommandCallback("gonative://moxo/unlink", params, true);
  },
  localUnlink: function (params) {
    return addCommandCallback("gonative://moxo/localUnlink", params, true);
  },
  showDashboard: function () {
    addCommand("gonative://moxo/showDashboard");
  },
  openLiveChatWithCompletion: function () {
    addCommand("gonative://moxo/openLiveChatWithCompletion");
  },
  openLiveChatWithChannelId: function (params) {
    addCommand("gonative://moxo/openLiveChatWithChannelId", params);
  },
  openChat: function (params) {
    addCommand("gonative://moxo/openChat", params);
  },
  getUnreadMessageCount: function (params) {
    return addCommandCallback("gonative://moxo/getUnreadMessageCount", params);
  },
};

const nativebridge = {
  custom: function (params) {
    addCommand("gonative://nativebridge/custom", params);
  },
};

const onesignal = {
  run: {
    onesignalInfo: function () {
      addCommand("gonative://run/gonative_onesignal_info");
    },
  },
  onesignalInfo: function (params) {
    return addCommandCallback(
      "gonative://run/gonative_onesignal_info",
      params,
      true
    );
  },
  register: function () {
    addCommand("gonative://onesignal/register");
  },
  userPrivacyConsent: {
    grant: function () {
      addCommand("gonative://onesignal/userPrivacyConsent/grant");
    },
    revoke: function () {
      addCommand("gonative://onesignal/userPrivacyConsent/revoke");
    },
  },
  tags: {
    getTags: function (params) {
      return addCommandCallback("gonative://onesignal/tags/get", params);
    },
    setTags: function (params) {
      addCommand("gonative://onesignal/tags/set", params);
    },
    deleteTags: function (params) {
      addCommand("gonative://onesignal/tags/delete", params);
    },
  },
  showTagsUI: function () {
    addCommand("gonative://onesignal/showTagsUI");
  },
  promptLocation: function () {
    addCommand("gonative://onesignal/promptLocation");
  },
  iam: {
    addTrigger: function (triggers) {
      if (triggers) {
        var keyLocal = Object.keys(triggers)[0];
        var params = {
          key: keyLocal,
          value: triggers[keyLocal],
        };
        addCommand("gonative://onesignal/iam/addTrigger", params);
      }
    },
    addTriggers: function (params) {
      addCommand("gonative://onesignal/iam/addTriggers", params);
    },
    removeTriggerForKey: function (key) {
      var params = { key: key };
      addCommand("gonative://onesignal/iam/removeTriggerForKey", params);
    },
    getTriggerValueForKey: function (key) {
      var params = { key: key };
      addCommand("gonative://onesignal/iam/getTriggerValueForKey", params);
    },
    pauseInAppMessages: function () {
      addCommand("gonative://onesignal/iam/pauseInAppMessages?pause=true");
    },
    resumeInAppMessages: function () {
      addCommand("gonative://onesignal/iam/pauseInAppMessages?pause=false");
    },
    setInAppMessageClickHandler: function (handler) {
      var params = { handler: handler };
      addCommand(
        "gonative://onesignal/iam/setInAppMessageClickHandler",
        params
      );
    },
  },
  externalUserId: {
    set: function (params) {
      addCommand("gonative://onesignal/externalUserId/set", params);
    },
    remove: function () {
      addCommand("gonative://onesignal/externalUserId/remove");
    },
  },
  enableForegroundNotifications: function (enabled) {
    addCommand("gonative://onesignal/enableForegroundNotifications", {
      enabled,
    });
  },
};

const opentok = {
  video: {
    join: function (params) {
      if (params.callback) {
        return addCommandCallback("gonative://opentok/video/join", params);
      } else addCommand("gonative://opentok/video/join", params);
    },
  },
};

const permissions = {
  requestPhoneCallMgmt: function (params) {
    if (params.callback) {
      return addCommandCallback(
        "gonative://permissions/requestPhoneCallMgmt",
        params
      );
    } else addCommand("gonative://permissions/requestPhoneCallMgmt", params);
  },
};

const plaid = {
  linkBank: function (params) {
    return addCommandCallback("gonative://plaid/linkBank", params);
  },
  verifyIdentity: function (params) {
    return addCommandCallback("gonative://plaid/verifyIdentity", params);
  },
};

const purchase = iap.purchase;

const socialLogin = {
  facebook: {
    login: function (params) {
      if (params.callback) {
        return addCommandCallback(
          "gonative://socialLogin/facebook/login",
          params
        );
      } else addCommand("gonative://socialLogin/facebook/login", params);
    },
    logout: function (params) {
      if (params.callback) {
        return addCommandCallback(
          "gonative://socialLogin/facebook/logout",
          params
        );
      } else addCommand("gonative://socialLogin/facebook/logout", params);
    },
  },
  google: {
    login: function (params) {
      if (params.callback) {
        return addCommandCallback(
          "gonative://socialLogin/google/login",
          params
        );
      } else addCommand("gonative://socialLogin/google/login", params);
    },
    logout: function (params) {
      if (params.callback) {
        return addCommandCallback(
          "gonative://socialLogin/google/logout",
          params
        );
      } else addCommand("gonative://socialLogin/google/logout", params);
    },
  },
  apple: {
    login: function (params) {
      if (params.callback) {
        return addCommandCallback("gonative://socialLogin/apple/login", params);
      } else addCommand("gonative://socialLogin/apple/login", params);
    },
  },
};

const storage = {
  app: localpreferences.nonpersistent,
  cloud: localpreferences.persistent,
  filesystem: localpreferences.filesystem,
};

const twilio = {
  video: {
    join: function (params) {
      if (params.callback) {
        return addCommandCallback("gonative://twilio/video/join", params);
      } else addCommand("gonative://twilio/video/join", params);
    },
  },
};

const gonative = {
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

export default gonative;
