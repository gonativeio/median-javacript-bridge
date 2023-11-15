import { addCommand } from '../utilities';

const autorefresh = {
  set: function (params: any) {
    addCommand('median://autorefresh/set', params);
  },
};

export default autorefresh;
