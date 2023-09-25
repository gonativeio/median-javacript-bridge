import { addCommand } from "../utilities";

const nativebridge = {
  custom: function (params) {
    addCommand("median://nativebridge/custom", params);
  },
};

export default nativebridge;
