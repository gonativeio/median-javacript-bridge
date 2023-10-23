declare const storage: {
    app: {
        set: (params: any) => void;
        get: (params: any) => Promise<unknown> | undefined;
        delete: (params: any) => void;
        deleteAll: (params: any) => void;
    };
    cloud: {
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
export default storage;
//# sourceMappingURL=storage.d.ts.map