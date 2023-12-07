import { CallbackData } from '../types';
import { addCommandCallback } from '../utils';

type OpenTokJoinParams = {
  apiKey: string;
  sessionId: string;
  token: string;
  callback?: (data: CallbackData) => void;
};

const opentok = {
  video: {
    join: function (params: OpenTokJoinParams) {
      return addCommandCallback('median://opentok/video/join', params);
    },
  },
};

export default opentok;
