import { addCommand } from '../utils';

const android = {
  geoLocation: {
    promptAndroidLocationServices: function () {
      addCommand('median://geoLocation/promptAndroidLocationServices');
    },
  },
  screen: {
    fullscreen: function () {
      addCommand('median://screen/fullscreen');
    },
    normal: function () {
      addCommand('median://screen/normal');
    },
    keepScreenOn: function () {
      addCommand('median://screen/keepScreenOn');
    },
    keepScreenNormal: function () {
      addCommand('median://screen/keepScreenNormal');
    },
  },
  audio: {
    requestFocus: function (enabled: boolean) {
      addCommand('median://audio/requestFocus', { enabled });
    },
  },
};

export default android;
