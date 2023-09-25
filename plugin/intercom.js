import { addCommand, addCommandCallback } from "../utilities";

const intercom = {
  registerPush: function (params) {
    return addCommandCallback("median://intercom/registerPush", params);
  },
  updateUser: function (params) {
    addCommand("median://intercom/updateUser", params);
  },
  logEvent: function (params) {
    addCommand("median://intercom/logEvent", params);
  },
  logout: function () {
    addCommand("median://intercom/logout");
  },
  presentCarousel: function (params) {
    addCommand("median://intercom/presentCarousel", params);
  },
  permissionStatus: function (params) {
    return addCommandCallback(
      "median://intercom/permissionStatus",
      params,
      true
    );
  },
  requestPermission: function (params) {
    return addCommandCallback("median://intercom/registerPush", params, true);
  },
};

export default intercom;
