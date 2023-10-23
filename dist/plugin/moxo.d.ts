declare const moxo: {
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
export default moxo;
//# sourceMappingURL=moxo.d.ts.map