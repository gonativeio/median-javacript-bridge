import { addCommand } from "../utilities";

const nativebridge = {
  custom: function (params: any) {
    addCommand("median://nativebridge/custom", params);
  },
};

export default nativebridge;
