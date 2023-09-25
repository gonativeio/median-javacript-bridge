import { addCommand, addCommandCallback } from "../utilities";

const cordial = {
  unsetContact: function (params) {
    if (params && params.callback) {
      return addCommandCallback("median://cordial/unsetContact", params);
    } else addCommand("median://cordial/unsetContact", params);
  },
  setContact: function (params) {
    if (params && params.callback) {
      return addCommandCallback("median://cordial/setContact", params);
    } else addCommand("median://cordial/setContact", params);
  },
  permissionStatus: function (params) {
    return addCommandCallback(
      "median://cordial/permissionStatus",
      params,
      true
    );
  },
  requestPermission: function (params) {
    return addCommandCallback(
      "median://cordial/requestPermission",
      params,
      true
    );
  },
};

export default cordial;
