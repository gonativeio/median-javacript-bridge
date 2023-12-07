import { CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type DocumentScannerScanData = {
  image: string;
  mimeType: string;
  encoding: string;
};

const documentScanner = {
  scanPage: function (params: CallbackParams<DocumentScannerScanData>) {
    if (params?.callback) {
      return addCommandCallback('median://documentScanner/scanPage', params);
    }
    addCommand('median://documentScanner/scanPage', params);
  },
  init: function (params: CallbackParams<DocumentScannerScanData>) {
    addCommand('median://documentScanner/scanPage', params);
  },
};

export default documentScanner;
