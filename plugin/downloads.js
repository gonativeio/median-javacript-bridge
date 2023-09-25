import { addCommand, addCommandCallback } from "../utilities";

const downloads = {
  init: function (params) {
    return addCommandCallback("median://downloads/init", params);
  },
  downloadFile: function (params) {
    addCommand("median://downloads/downloadFile", params);
  },
  showUI: function () {
    addCommand("median://downloads/showUI");
  },
};

export default downloads;
