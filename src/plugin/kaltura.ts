import { addCommand } from '../utilities';

const kaltura = {
  play: function (params: any) {
    addCommand('median://kaltura/play', params);
  },
};

export default kaltura;
