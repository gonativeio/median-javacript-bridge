import { addCommand } from "../utilities";

const beacon = {
  scan: function (params) {
    addCommand("median://beacon/scan", params);
  },
};

export default beacon;
