import { addCommand } from "../utilities";

const facebook = {
  events: {
    send: function (params: any) {
      addCommand("median://facebook/events/send", params);
    },
    sendPurchase: function (params: any) {
      addCommand("median://facebook/events/sendPurchase", params);
    },
  },
};

export default facebook;
