import { addCommand, addCommandCallback } from '../utils';

const twilio = {
  video: {
    join: function (params: any) {
      if (params.callback) {
        return addCommandCallback('median://twilio/video/join', params);
      } else addCommand('median://twilio/video/join', params);
    },
  },
};

export default twilio;
