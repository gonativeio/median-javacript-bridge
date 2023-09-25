import { addCommand, addCommandCallback } from "../utilities";

const backgroundMedia = {
  playTrack: function (params) {
    if (typeof params === "number") {
      params = {
        time: params,
      };
    }
    addCommand("median://backgroundMedia/playTrack", params);
  },
  streamPlaylist: function (params) {
    addCommand("median://backgroundMedia/streamPlaylist", params);
  },
  pause: function () {
    addCommand("median://backgroundMedia/pause");
  },
  stop: function () {
    addCommand("median://backgroundMedia/stop");
  },
  play: function () {
    addCommand("median://backgroundMedia/play");
  },
  resume: function () {
    addCommand("median://backgroundMedia/resume");
  },
  getPlayerStatus: function (params) {
    return addCommandCallback(
      "median://backgroundMedia/getPlayerStatus",
      params
    );
  },
};

export default backgroundMedia;
