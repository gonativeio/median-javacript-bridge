import { addCommand, addCommandCallback } from '../utilities';

const downloads = {
  init: function (params: any) {
    return addCommandCallback('median://downloads/init', params);
  },
  downloadFile: function (params: any) {
    addCommand('median://downloads/downloadFile', params);
  },
  showUI: function () {
    addCommand('median://downloads/showUI');
  },
};

export default downloads;
