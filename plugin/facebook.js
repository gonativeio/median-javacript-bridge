import { addCommand } from "../utilities";

const facebook = {
  events: {
    send: function (params) {
      addCommand("median://facebook/events/send", params);
    },
    sendPurchase: function (params) {
      addCommand("median://facebook/events/sendPurchase", params);
    },
  },
};

export default facebook;
