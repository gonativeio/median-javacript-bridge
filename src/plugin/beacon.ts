import { addCommand } from '../utils';

const beacon = {
  scan: function (params: any) {
    addCommand('median://beacon/scan', params);
  },
};

export default beacon;
