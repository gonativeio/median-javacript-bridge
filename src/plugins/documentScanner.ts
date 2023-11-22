import { addCommand, addCommandCallback } from '../utilities';

const documentScanner = {
  scanPage: function (params: any) {
    if (params.callback) {
      return addCommandCallback('median://documentScanner/scanPage', params);
    } else addCommand('median://documentScanner/scanPage', params);
  },
  init: function (params: any) {
    addCommand('median://documentScanner/scanPage', params);
  },
};

export default documentScanner;
