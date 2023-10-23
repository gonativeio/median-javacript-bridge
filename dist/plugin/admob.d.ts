declare const admob: {
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
export default admob;
//# sourceMappingURL=admob.d.ts.map