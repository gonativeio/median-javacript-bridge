import { addCommand } from '../utils';

const kaltura = {
  play: function (params: any) {
    addCommand('median://kaltura/play', params);
  },
};

export default kaltura;
