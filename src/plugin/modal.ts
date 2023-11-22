import { addCommandCallback } from '../utils';

const modal = {
  launch: function (params: any) {
    return addCommandCallback('median://modal/launch', params);
  },
};

export default modal;
