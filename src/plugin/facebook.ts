import { addCommand } from '../utils';

const facebook = {
  events: {
    send: function (params: any) {
      addCommand('median://facebook/events/send', params);
    },
    sendPurchase: function (params: any) {
      addCommand('median://facebook/events/sendPurchase', params);
    },
  },
};

export default facebook;
