declare module "median" {
  type Params = Record<string, string | number | boolean | null>;

  interface AdMob {
    showInterstitialIfReady: () => void;
    showInterstitialOnNextPageLoadIfReady: () => void;
    banner: {
      enable: () => void;
      disable: () => void;
    };
    request: { tracking: (params: Params) => Promise<any> };
  }

  interface AppReview {
    prompt: (params?: {
      callback?: (data: any) => void;
    }) => void | Promise<any>;
  }

  interface AppsFlyer {
    logEvent: (eventName: string, eventValues: Record<string, any>) => void;
    setCustomerUserId: (userId: string) => void;
  }

  interface Auth {
    status: (params?: Params) => Promise<any>;
    save: (params: { secret: string | Record<string, any> }) => void;
    get: (params: Params) => void;
    delete: (params: Params) => void;
  }

  interface Auth0 {
    loginUniversal: (params: Params) => void;
    logout: (params: Params) => void;
    status: (params?: Params) => Promise<any>;
    save: (params: { secret: string | Record<string, any> }) => void;
    profile: (params: Params) => void;
    get: (params: Params) => void;
    delete: (params: Params) => void;
  }

  interface AutoRefresh {
    set: (params: Params) => void;
  }

  interface BackgroundLocation {
    start: (params: Params) => void;
    stop: () => void;
  }

  interface BackgroundMedia {
    playTrack: (params: number | Params) => void;
    streamPlaylist: (params: Params) => void;
    pause: () => void;
    stop: () => void;
    play: () => void;
    resume: () => void;
    getPlayerStatus: (params: Params) => Promise<any>;
  }

  interface Barcode {
    scan: (params: Params) => Promise<any>;
    setPrompt: (params: string) => void;
  }

  interface Beacon {
    scan: (params: Params) => void;
  }

  interface Braze {
    changeUser: (params: Params) => Promise<any>;
    notificationEnabled: (params: Params) => Promise<any>;
    promptNotification: (params: Params) => Promise<any>;
    logCustomEvent: (eventName: string, data: any) => void;
  }

  interface CardIO {
    scanCard: (params: Params) => Promise<any>;
  }

  interface Contacts {
    getAll: (params: Params) => Promise<any>;
    getPermissionStatus: (params: Params) => Promise<any>;
  }

  interface Cordial {
    unsetContact: (params?: Params) => Promise<any> | void;
    setContact: (params?: Params) => Promise<any> | void;
    permissionStatus: (params: Params) => Promise<any>;
    requestPermission: (params: Params) => Promise<any>;
  }

  interface DocumentScanner {
    scanPage: (params: Params) => Promise<any>;
    init: (params: Params) => void;
  }

  interface Downloads {
    init: (params: Params) => Promise<any>;
    downloadFile: (params: Params) => void;
    showUI: () => void;
  }

  interface Esmiley {
    scan: (timeout: any) => Promise<any>;
    connect: (deviceId: string) => Promise<any>;
    disconnect: () => void;
    send: (object: any) => Promise<any>;
  }

  interface Facebook {
    events: {
      send: (params: Params) => void;
      sendPurchase: (params: Params) => void;
    };
  }

  interface FirebaseAnalytics {
    event: {
      collection: (enabled: boolean) => void;
      setUser: (params: Params) => void;
      setUserProperty: (params: Params) => void;
      defaultEventParameters: (params: Params) => void;
      logEvent: (params: Params) => void;
      logScreen: (params: Params) => void;
      viewItem: (params: Params) => void;
      addToWishlist: (params: Params) => void;
      addToCart: (params: Params) => void;
      removeFromCart: (params: Params) => void;
    };
  }

  interface Haptics {
    trigger: (params: Params) => void;
  }

  interface IAP {
    purchase: (params: Params) => Promise<any>;
    manageSubscription: (params: Params) => void;
    manageAllSubscriptions: () => void;
    restorePurchases: () => void;
    info: () => Promise<any>;
    refresh: () => void;
  }

  interface Intercom {
    registerPush: (params: Params) => Promise<any>;
    updateUser: (params: Params) => void;
    logEvent: (params: Params) => void;
    logout: () => void;
    presentCarousel: (params: Params) => void;
    permissionStatus: (params: Params) => Promise<any>;
    requestPermission: (params: Params) => Promise<any>;
  }

  interface Kaltura {
    play: (params: Params) => void;
  }

  interface LocalPreferencesMethods {
    set: (params: Params) => void;
    get: (params: Params) => Promise<any>;
    delete: (params: Params) => void;
    deleteAll: (params: Params) => void;
  }

  interface LocalPreferences {
    nonpersistent: LocalPreferencesMethods;
    persistent: LocalPreferencesMethods;
    filesystem: {
      save: (params: Params) => void;
      read: (params: Params) => Promise<any>;
      delete: (params: Params) => void;
    };
  }

  interface Modal {
    launch: (params?: Params) => Promise<any>;
  }

  interface Moengage {
    notificationEnabled: (params?: Params) => Promise<any>;
    promptNotification: (params?: Params) => Promise<any>;
    setUniqueID: (uniqueId: string) => Promise<any>;
    resetUser: () => Promise<any>;
    setAlias: (alias: string) => Promise<any>;
    trackEvent: (eventName: string, eventData: any) => Promise<any>;
    launchInbox: () => Promise<any>;
  }

  interface Moxo {
    login: (params?: Params) => Promise<any>;
    registerNotifications: (params?: Params) => Promise<any>;
    requestPermission: (params?: Params) => Promise<any>;
    permissionStatus: (params?: Params) => Promise<any>;
    isLinked: (params?: Params) => Promise<any>;
    unlink: (params?: Params) => Promise<any>;
    localUnlink: (params?: Params) => Promise<any>;
    showDashboard: () => void;
    openLiveChatWithCompletion: () => void;
    openLiveChatWithChannelId: (params: Params) => void;
    openChat: (params: Params) => void;
    getUnreadMessageCount: (params: Params) => Promise<any>;
  }

  interface NativeBridge {
    custom: (params: Params) => void;
  }

  interface OneSignal {
    run: {
      onesignalInfo: () => void;
    };
    onesignalInfo: (params?: Params) => Promise<any>;
    register: () => void;
    userPrivacyConsent: {
      grant: () => void;
      revoke: () => void;
    };
    tags: {
      getTags: (params?: Params) => Promise<any>;
      setTags: (params: Params) => void;
      deleteTags: (params: Params) => void;
    };
    showTagsUI: () => void;
    promptLocation: () => void;
    iam: {
      addTrigger: (triggers: Record<string, string | number>) => void;
      addTriggers: (params: Params) => void;
      removeTriggerForKey: (key: string) => void;
      getTriggerValueForKey: (key: string) => void;
      pauseInAppMessages: () => void;
      resumeInAppMessages: () => void;
      setInAppMessageClickHandler: (handler: string) => void;
    };
    externalUserId: {
      set: (params: Params) => void;
      remove: () => void;
    };
    enableForegroundNotifications: (enabled: boolean) => void;
  }

  interface Opentok {
    video: { join: (params?: Params) => Promise<any> | void };
  }

  interface Permissions {
    requestPhoneCallMgmt: (params?: Params) => Promise<any> | void;
  }

  interface Plaid {
    linkBank: (params: Params) => Promise<any>;
    verifyIdentity: (params: Params) => Promise<any>;
  }

  interface SocialLoginMethods {
    login: (params?: Params) => void | Promise<any>;
    logout: (params?: Params) => void | Promise<any>;
  }

  interface SocialLogin {
    facebook: SocialLoginMethods;
    google: SocialLoginMethods;
    apple: {
      login: (params?: Params) => void | Promise<any>;
    };
  }

  interface Twilio {
    video: {
      join: (params?: Params) => Promise<any> | void;
    };
  }

  export default interface Median {
    admob: AdMob;
    appreview: AppReview;
    appsflyer: AppsFlyer;
    auth: Auth;
    auth0: Auth0;
    autorefresh: AutoRefresh;
    backgroundLocation: BackgroundLocation;
    backgroundMedia: BackgroundMedia;
    barcode: Barcode;
    beacon: Beacon;
    braze: Braze;
    card_io: CardIO;
    contacts: Contacts;
    cordial: Cordial;
    documentScanner: DocumentScanner;
    downloads: Downloads;
    esmiley: Esmiley;
    facebook: Facebook;
    firebaseAnalytics: FirebaseAnalytics;
    haptics: Haptics;
    iap: IAP;
    intercom: Intercom;
    kaltura: Kaltura;
    localpreferences: LocalPreferences;
    modal: Modal;
    moengage: Moengage;
    moxo: Moxo;
    nativebridge: NativeBridge;
    onesignal: OneSignal;
    opentok: Opentok;
    permissions: Permissions;
    plaid: Plaid;
    purchase: (params: Params) => Promise<any>;
    socialLogin: SocialLogin;
    storage: LocalPreferences;
    twilio: Twilio;
  }
}
