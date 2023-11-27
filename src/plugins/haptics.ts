import { AddListenerType, RemoveListenerType } from '../types';
import { addCommand } from '../utils';

type HapticsTriggerParams = {
  style:
    | 'impactLight'
    | 'impactMedium'
    | 'impactHeavy'
    | 'notificationSuccess'
    | 'notificationWarning'
    | 'notificationError'
    | 'tick'
    | 'click'
    | 'double_click';
};

const haptics = {
  trigger: function (params: HapticsTriggerParams) {
    addCommand('median://haptics/trigger', params);
  },
};

const deviceShake = function (addListener: AddListenerType, removeListener: RemoveListenerType) {
  return {
    addListener: function (callback: () => void) {
      return addListener(callback, '_median_device_shake');
    },
    removeListener: function (functionId: string) {
      return removeListener('_median_device_shake', functionId);
    },
  };
};

export { haptics, deviceShake };
