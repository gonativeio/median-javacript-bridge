declare const socialLogin: {
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
export default socialLogin;
//# sourceMappingURL=socialLogin.d.ts.map