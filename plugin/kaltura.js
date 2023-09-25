import { addCommand } from "../utilities";

const kaltura = {
  play: function (params) {
    addCommand("median://kaltura/play", params);
  },
};

export default kaltura;
