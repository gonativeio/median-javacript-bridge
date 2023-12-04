import { CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type BarcodeScanResult = {
  success: boolean;
  type?: string;
  code?: string;
  error?: string;
};

const barcode = {
  scan: function (params: CallbackParams<BarcodeScanResult>) {
    return addCommandCallback<BarcodeScanResult>('median://barcode/scan', params);
  },
  setPrompt: function (prompt: string) {
    return addCommand('median://barcode/setPrompt', { prompt });
  },
};

export default barcode;
