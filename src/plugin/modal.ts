import { addCommandCallback } from "../utilities";

const modal = {
  launch: function (params: any) {
    return addCommandCallback("median://modal/launch", params);
  },
};

export default modal;
