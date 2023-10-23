declare const intercom: {
    registerPush: (params: any) => Promise<unknown> | undefined;
    updateUser: (params: any) => void;
    logEvent: (params: any) => void;
    logout: () => void;
    presentCarousel: (params: any) => void;
    permissionStatus: (params: any) => Promise<unknown> | undefined;
    requestPermission: (params: any) => Promise<unknown> | undefined;
};
export default intercom;
//# sourceMappingURL=intercom.d.ts.map