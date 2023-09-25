import { addCommand } from "../utilities";

const haptics = {
  trigger: function (params) {
    addCommand("median://haptics/trigger", params);
  },
};

export default haptics;
