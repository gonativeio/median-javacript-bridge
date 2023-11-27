import { AddListenerType, RemoveListenerType } from '../types';

const appResumed = function (addListener: AddListenerType, removeListener: RemoveListenerType) {
  return {
    addListener: function (callback: () => void) {
      return addListener(callback, '_median_app_resumed');
    },
    removeListener: function (functionId: string) {
      return removeListener('_median_app_resumed', functionId);
    },
  };
};

export { appResumed };
