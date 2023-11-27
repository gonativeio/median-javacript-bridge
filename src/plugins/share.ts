import { AddCallbackType } from '../types';

type ShareToAppCallbackData = { url: string; subject: string };

const shareToApp = function (addCallback: AddCallbackType) {
  return {
    setCallback: function (callback: (data: ShareToAppCallbackData) => void) {
      return addCallback(callback, '_median_share_to_app');
    },
  };
};

export { shareToApp };
