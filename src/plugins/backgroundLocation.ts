import { addCommand } from '../utilities';

const backgroundLocation = {
  start: function (params: any) {
    addCommand('median://backgroundLocation/start', params, true);
  },
  stop: function () {
    addCommand('median://backgroundLocation/stop');
  },
};

export default backgroundLocation;
