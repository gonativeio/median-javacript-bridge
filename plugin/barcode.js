import { addCommand, addCommandCallback } from "../utilities";

const barcode = {
  scan: function (params) {
    return addCommandCallback("median://barcode/scan", params);
  },
  setPrompt: function (params) {
    return addCommand("median://barcode/setPrompt", { prompt: params });
  },
};

export default barcode;
