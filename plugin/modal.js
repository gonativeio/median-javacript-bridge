import { addCommandCallback } from "../utilities";

const modal = {
  launch: function (params) {
    return addCommandCallback("median://modal/launch", params);
  },
};

export default modal;
