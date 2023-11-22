import { addCommand } from '../utils';

const autorefresh = {
  set: function (params: any) {
    addCommand('median://autorefresh/set', params);
  },
};

export default autorefresh;
