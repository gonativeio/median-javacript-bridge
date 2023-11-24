import { CallbackData } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type TwilioJoinParams = {
  apiKey: string;
  sessionId: string;
  token: string;
  callback?: (data: CallbackData) => void;
};

const twilio = {
  video: {
    join: function (params: TwilioJoinParams) {
      if (params.callback) {
        return addCommandCallback('median://twilio/video/join', params);
      }
      addCommand('median://twilio/video/join', params);
    },
  },
};

export default twilio;
