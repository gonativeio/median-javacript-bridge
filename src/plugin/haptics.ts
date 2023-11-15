import { addCommand } from '../utilities';

const haptics = {
  trigger: function (params: any) {
    addCommand('median://haptics/trigger', params);
  },
};

export default haptics;
