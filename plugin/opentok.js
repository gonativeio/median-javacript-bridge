import { addCommand, addCommandCallback } from "../utilities";

const opentok = {
  video: {
    join: function (params) {
      if (params.callback) {
        return addCommandCallback("median://opentok/video/join", params);
      } else addCommand("median://opentok/video/join", params);
    },
  },
};

export default opentok;
