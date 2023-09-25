import { addCommand, addCommandCallback } from "../utilities";

const twilio = {
  video: {
    join: function (params) {
      if (params.callback) {
        return addCommandCallback("median://twilio/video/join", params);
      } else addCommand("median://twilio/video/join", params);
    },
  },
};

export default twilio;
