import { addCommand, addCommandCallback } from '../utilities';

const barcode = {
  scan: function (params: any) {
    return addCommandCallback('median://barcode/scan', params);
  },
  setPrompt: function (params: any) {
    return addCommand('median://barcode/setPrompt', { prompt: params });
  },
};

export default barcode;
