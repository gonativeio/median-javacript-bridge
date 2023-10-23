declare const moengage: {
    notificationEnabled: (params: any) => Promise<unknown> | undefined;
    promptNotification: (params: any) => Promise<unknown> | undefined;
    setUniqueID: (uniqueId: any) => Promise<unknown> | undefined;
    resetUser: () => Promise<unknown> | undefined;
    setAlias: (alias: any) => Promise<unknown> | undefined;
    trackEvent: (eventName: any, eventData: any) => Promise<unknown> | undefined;
    launchInbox: () => Promise<unknown> | undefined;
};
export default moengage;
//# sourceMappingURL=moengage.d.ts.map