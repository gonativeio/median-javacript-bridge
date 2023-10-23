import { addCommand, addCommandCallback } from "../utilities";

const intercom = {
  registerPush: function (params: any) {
    return addCommandCallback("median://intercom/registerPush", params);
  },
  updateUser: function (params: any) {
    addCommand("median://intercom/updateUser", params);
  },
  logEvent: function (params: any) {
    addCommand("median://intercom/logEvent", params);
  },
  logout: function () {
    addCommand("median://intercom/logout");
  },
  presentCarousel: function (params: any) {
    addCommand("median://intercom/presentCarousel", params);
  },
  permissionStatus: function (params: any) {
    return addCommandCallback(
      "median://intercom/permissionStatus",
      params,
      true
    );
  },
  requestPermission: function (params: any) {
    return addCommandCallback("median://intercom/registerPush", params, true);
  },
};

export default intercom;
