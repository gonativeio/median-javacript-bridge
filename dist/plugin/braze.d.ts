declare const braze: {
    changeUser: (params: any) => Promise<unknown> | undefined;
    notificationEnabled: (params: any) => Promise<unknown> | undefined;
    promptNotification: (params: any) => Promise<unknown> | undefined;
    logCustomEvent: (eventName: any, data: any) => void;
};
export default braze;
//# sourceMappingURL=braze.d.ts.map