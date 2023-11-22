import { addCommand, addCommandCallback } from '../utils';

const esmiley = {
  scan: function (timeout: any) {
    return addCommandCallback('median://esmiley/scan', { timeout });
  },
  connect: function (deviceId: any) {
    return addCommandCallback('median://esmiley/connect', { deviceId });
  },
  disconnect: function () {
    addCommand('median://esmiley/disconnect');
  },
  send: function (object: any) {
    return addCommandCallback('median://esmiley/send', { object });
  },
};

export default esmiley;
