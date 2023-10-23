declare const iap: {
    purchase: (params: any) => Promise<unknown> | undefined;
    manageSubscription: (params: any) => void;
    manageAllSubscriptions: () => void;
    restorePurchases: () => void;
    info: () => Promise<unknown> | undefined;
    refresh: () => void;
};
export default iap;
//# sourceMappingURL=iap.d.ts.map