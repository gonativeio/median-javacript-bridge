declare const firebaseAnalytics: {
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
export default firebaseAnalytics;
//# sourceMappingURL=firebaseAnalytics.d.ts.map