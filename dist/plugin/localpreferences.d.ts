declare const localpreferences: {
    nonpersistent: {
        set: (params: any) => void;
        get: (params: any) => Promise<unknown> | undefined;
        delete: (params: any) => void;
        deleteAll: (params: any) => void;
    };
    persistent: {
        set: (params: any) => void;
        get: (params: any) => Promise<unknown> | undefined;
        delete: (params: any) => void;
        deleteAll: (params: any) => void;
    };
    filesystem: {
        save: (params: any) => void;
        read: (params: any) => Promise<unknown> | undefined;
        delete: (params: any) => void;
    };
};
export default localpreferences;
//# sourceMappingURL=localpreferences.d.ts.map