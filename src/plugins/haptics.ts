import { addCommand } from '../utils';

const haptics = {
  trigger: function (params: any) {
    addCommand('median://haptics/trigger', params);
  },
};

export default haptics;
