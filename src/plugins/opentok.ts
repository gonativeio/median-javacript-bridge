import { CallbackData } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type OpenTokJoinParams = {
  apiKey: string;
  sessionId: string;
  token: string;
  callback?: (data: CallbackData) => void;
};

const opentok = {
  video: {
    join: function (params: OpenTokJoinParams) {
      if (params.callback) {
        return addCommandCallback('median://opentok/video/join', params);
      }
      addCommand('median://opentok/video/join', params);
    },
  },
};

export default opentok;
