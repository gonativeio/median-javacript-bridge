import { addCommand } from "../utilities";

const beacon = {
  scan: function (params: any) {
    addCommand("median://beacon/scan", params);
  },
};

export default beacon;
