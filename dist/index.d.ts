declare global {
    interface Window {
        webkit?: {
            messageHandlers?: {
                JSBridge?: any;
            };
        };
    }
}
declare class Median {
    #private;
    isNativeApp: () => any;
    onReady: (callback: Function) => void;
    admob: {
        showInterstitialIfReady: () => void;
        showInterstitialOnNextPageLoadIfReady: () => void;
        banner: {
            enable: () => void;
            disable: () => void;
        };
        request: {
            tracking: (params: any) => Promise<unknown> | undefined;
        };
    };
    appreview: {
        prompt: (params: any) => Promise<unknown> | undefined;
    };
    appsflyer: {
        logEvent: (eventName: any, eventValues: any) => void;
        setCustomerUserId: (userId: any) => void;
    };
    auth: {
        status: (params: any) => Promise<unknown> | undefined;
        save: (params: any) => void;
        get: (params: any) => void;
        delete: (params: any) => void;
    };
    auth0: {
        loginUniversal: (params: any) => void;
        logout: (params: any) => void;
        status: (params: any) => Promise<unknown> | undefined;
        save: (params: any) => void;
        profile: (params: any) => void;
        get: (params: any) => void;
        delete: (params: any) => void;
    };
    autorefresh: {
        set: (params: any) => void;
    };
    backgroundLocation: {
        start: (params: any) => void;
        stop: () => void;
    };
    backgroundMedia: {
        playTrack: (params: any) => void;
        streamPlaylist: (params: any) => void;
        pause: () => void;
        stop: () => void;
        play: () => void;
        resume: () => void;
        getPlayerStatus: (params: any) => Promise<unknown> | undefined;
    };
    barcode: {
        scan: (params: any) => Promise<unknown> | undefined;
        setPrompt: (params: any) => void;
    };
    beacon: {
        scan: (params: any) => void;
    };
    braze: {
        changeUser: (params: any) => Promise<unknown> | undefined;
        notificationEnabled: (params: any) => Promise<unknown> | undefined;
        promptNotification: (params: any) => Promise<unknown> | undefined;
        logCustomEvent: (eventName: any, data: any) => void;
    };
    card_io: {
        scanCard: (params: any) => Promise<unknown> | undefined;
    };
    contacts: {
        getAll: (params: any) => Promise<unknown> | undefined;
        getPermissionStatus: (params: any) => Promise<unknown> | undefined;
    };
    cordial: {
        unsetContact: (params: any) => Promise<unknown> | undefined;
        setContact: (params: any) => Promise<unknown> | undefined;
        permissionStatus: (params: any) => Promise<unknown> | undefined;
        requestPermission: (params: any) => Promise<unknown> | undefined;
    };
    documentScanner: {
        scanPage: (params: any) => Promise<unknown> | undefined;
        init: (params: any) => void;
    };
    downloads: {
        init: (params: any) => Promise<unknown> | undefined;
        downloadFile: (params: any) => void;
        showUI: () => void;
    };
    esmiley: {
        scan: (timeout: any) => Promise<unknown> | undefined;
        connect: (deviceId: any) => Promise<unknown> | undefined;
        disconnect: () => void;
        send: (object: any) => Promise<unknown> | undefined;
    };
    facebook: {
        events: {
            send: (params: any) => void;
            sendPurchase: (params: any) => void;
        };
    };
    firebaseAnalytics: {
        event: {
            collection: (bool: any) => void;
            setUser: (params: any) => void;
            setUserProperty: (params: any) => void;
            defaultEventParameters: (params: any) => void;
            logEvent: (params: any) => void;
            logScreen: (params: any) => void;
            viewItem: (params: any) => void;
            addToWishlist: (params: any) => void;
            addToCart: (params: any) => void;
            removeFromCart: (params: any) => void;
        };
    };
    haptics: {
        trigger: (params: any) => void;
    };
    iap: {
        purchase: (params: any) => Promise<unknown> | undefined;
        manageSubscription: (params: any) => void;
        manageAllSubscriptions: () => void;
        restorePurchases: () => void;
        info: () => Promise<unknown> | undefined;
        refresh: () => void;
    };
    intercom: {
        registerPush: (params: any) => Promise<unknown> | undefined;
        updateUser: (params: any) => void;
        logEvent: (params: any) => void;
        logout: () => void;
        presentCarousel: (params: any) => void;
        permissionStatus: (params: any) => Promise<unknown> | undefined;
        requestPermission: (params: any) => Promise<unknown> | undefined;
    };
    kaltura: {
        play: (params: any) => void;
    };
    localpreferences: {
        nonpersistent: {
            set: (params: any) => void;
            get: (params: any) => Promise<unknown> | undefined;
            delete: (params: any) => void;
            deleteAll: (params: any) => void;
        };
        persistent: {
            set: (params: any) => void;
            get: (params: any) => Promise<unknown> | undefined;
            delete: (params: any) => void;
            deleteAll: (params: any) => void;
        };
        filesystem: {
            save: (params: any) => void;
            read: (params: any) => Promise<unknown> | undefined;
            delete: (params: any) => void;
        };
    };
    modal: {
        launch: (params: any) => Promise<unknown> | undefined;
    };
    moengage: {
        notificationEnabled: (params: any) => Promise<unknown> | undefined;
        promptNotification: (params: any) => Promise<unknown> | undefined;
        setUniqueID: (uniqueId: any) => Promise<unknown> | undefined;
        resetUser: () => Promise<unknown> | undefined;
        setAlias: (alias: any) => Promise<unknown> | undefined;
        trackEvent: (eventName: any, eventData: any) => Promise<unknown> | undefined;
        launchInbox: () => Promise<unknown> | undefined;
    };
    moxo: {
        login: (params: any) => Promise<unknown> | undefined;
        registerNotifications: (params: any) => Promise<unknown> | undefined;
        requestPermission: (params: any) => Promise<unknown> | undefined;
        permissionStatus: (params: any) => Promise<unknown> | undefined;
        isLinked: (params: any) => Promise<unknown> | undefined;
        unlink: (params: any) => Promise<unknown> | undefined;
        localUnlink: (params: any) => Promise<unknown> | undefined;
        showDashboard: () => void;
        openLiveChatWithCompletion: () => void;
        openLiveChatWithChannelId: (params: any) => void;
        openChat: (params: any) => void;
        getUnreadMessageCount: (params: any) => Promise<unknown> | undefined;
    };
    nativebridge: {
        custom: (params: any) => void;
    };
    onesignal: {
        run: {
            onesignalInfo: () => void;
        };
        onesignalInfo: (params: any) => Promise<unknown> | undefined;
        register: () => void;
        userPrivacyConsent: {
            grant: () => void;
            revoke: () => void;
        };
        tags: {
            getTags: (params: any) => Promise<unknown> | undefined;
            setTags: (params: any) => void;
            deleteTags: (params: any) => void;
        };
        showTagsUI: () => void;
        promptLocation: () => void;
        iam: {
            addTrigger: (triggers: any) => void;
            addTriggers: (params: any) => void;
            removeTriggerForKey: (key: any) => void;
            getTriggerValueForKey: (key: any) => void;
            pauseInAppMessages: () => void;
            resumeInAppMessages: () => void;
            setInAppMessageClickHandler: (handler: any) => void;
        };
        externalUserId: {
            set: (params: any) => void;
            remove: () => void;
        };
        enableForegroundNotifications: (enabled: any) => void;
    };
    opentok: {
        video: {
            join: (params: any) => Promise<unknown> | undefined;
        };
    };
    permissions: {
        requestPhoneCallMgmt: (params: any) => Promise<unknown> | undefined;
    };
    plaid: {
        linkBank: (params: any) => Promise<unknown> | undefined;
        verifyIdentity: (params: any) => Promise<unknown> | undefined;
    };
    purchase: (params: any) => Promise<unknown> | undefined;
    socialLogin: {
        facebook: {
            login: (params: any) => Promise<unknown> | undefined;
            logout: (params: any) => Promise<unknown> | undefined;
        };
        google: {
            login: (params: any) => Promise<unknown> | undefined;
            logout: (params: any) => Promise<unknown> | undefined;
        };
        apple: {
            login: (params: any) => Promise<unknown> | undefined;
        };
    };
    storage: {
        app: {
            set: (params: any) => void;
            get: (params: any) => Promise<unknown> | undefined;
            delete: (params: any) => void;
            deleteAll: (params: any) => void;
        };
        cloud: {
            set: (params: any) => void;
            get: (params: any) => Promise<unknown> | undefined;
            delete: (params: any) => void;
            deleteAll: (params: any) => void;
        };
        filesystem: {
            save: (params: any) => void;
            read: (params: any) => Promise<unknown> | undefined;
            delete: (params: any) => void;
        };
    };
    twilio: {
        video: {
            join: (params: any) => Promise<unknown> | undefined;
        };
    };
}
declare const _default: Median;
export default _default;
//# sourceMappingURL=index.d.ts.map