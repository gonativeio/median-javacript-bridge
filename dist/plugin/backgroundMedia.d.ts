declare const backgroundMedia: {
    playTrack: (params: any) => void;
    streamPlaylist: (params: any) => void;
    pause: () => void;
    stop: () => void;
    play: () => void;
    resume: () => void;
    getPlayerStatus: (params: any) => Promise<unknown> | undefined;
};
export default backgroundMedia;
//# sourceMappingURL=backgroundMedia.d.ts.map