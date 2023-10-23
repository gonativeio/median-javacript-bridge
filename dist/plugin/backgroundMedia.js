"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const backgroundMedia = {
    playTrack: function (params) {
        if (typeof params === "number") {
            params = {
                time: params,
            };
        }
        (0, utilities_1.addCommand)("median://backgroundMedia/playTrack", params);
    },
    streamPlaylist: function (params) {
        (0, utilities_1.addCommand)("median://backgroundMedia/streamPlaylist", params);
    },
    pause: function () {
        (0, utilities_1.addCommand)("median://backgroundMedia/pause");
    },
    stop: function () {
        (0, utilities_1.addCommand)("median://backgroundMedia/stop");
    },
    play: function () {
        (0, utilities_1.addCommand)("median://backgroundMedia/play");
    },
    resume: function () {
        (0, utilities_1.addCommand)("median://backgroundMedia/resume");
    },
    getPlayerStatus: function (params) {
        return (0, utilities_1.addCommandCallback)("median://backgroundMedia/getPlayerStatus", params);
    },
};
exports.default = backgroundMedia;
//# sourceMappingURL=backgroundMedia.js.map