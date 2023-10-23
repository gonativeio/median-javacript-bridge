declare const auth0: {
    loginUniversal: (params: any) => void;
    logout: (params: any) => void;
    status: (params: any) => Promise<unknown> | undefined;
    save: (params: any) => void;
    profile: (params: any) => void;
    get: (params: any) => void;
    delete: (params: any) => void;
};
export default auth0;
//# sourceMappingURL=auth0.d.ts.map