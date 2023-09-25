import { addCommand, addCommandCallback } from "../utilities";

const esmiley = {
  scan: function (timeout) {
    return addCommandCallback("median://esmiley/scan", { timeout });
  },
  connect: function (deviceId) {
    return addCommandCallback("median://esmiley/connect", { deviceId });
  },
  disconnect: function () {
    addCommand("median://esmiley/disconnect");
  },
  send: function (object) {
    return addCommandCallback("median://esmiley/send", { object });
  },
};

export default esmiley;
