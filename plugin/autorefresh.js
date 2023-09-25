import { addCommand } from "../utilities";

const autorefresh = {
  set: function (params) {
    addCommand("median://autorefresh/set", params);
  },
};

export default autorefresh;
