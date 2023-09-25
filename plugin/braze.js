import { addCommand, addCommandCallback } from "../utilities";

const braze = {
  changeUser: function (params) {
    return addCommandCallback("median://braze/changeUser", params, true);
  },
  notificationEnabled: function (params) {
    return addCommandCallback(
      "median://braze/notificationEnabled",
      params,
      true
    );
  },
  promptNotification: function (params) {
    return addCommandCallback(
      "median://braze/promptNotification",
      params,
      true
    );
  },
  logCustomEvent: function (eventName, data) {
    var params = {
      eventName: eventName,
      data: data,
    };
    addCommand("median://braze/logCustomEvent", params);
  },
};

export default braze;
