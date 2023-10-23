declare const esmiley: {
    scan: (timeout: any) => Promise<unknown> | undefined;
    connect: (deviceId: any) => Promise<unknown> | undefined;
    disconnect: () => void;
    send: (object: any) => Promise<unknown> | undefined;
};
export default esmiley;
//# sourceMappingURL=esmiley.d.ts.map