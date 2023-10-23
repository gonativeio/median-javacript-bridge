declare const onesignal: {
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
export default onesignal;
//# sourceMappingURL=onesignal.d.ts.map