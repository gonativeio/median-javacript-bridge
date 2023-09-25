import { addCommandCallback } from "../utilities";

const moengage = {
  notificationEnabled: function (params) {
    return addCommandCallback(
      "median://moengage/notificationEnabled",
      params,
      true
    );
  },
  promptNotification: function (params) {
    return addCommandCallback(
      "median://moengage/promptNotification",
      params,
      true
    );
  },
  setUniqueID: function (uniqueId) {
    return addCommandCallback(
      "median://moengage/setUniqueID",
      { uniqueId },
      true
    );
  },
  resetUser: function () {
    return addCommandCallback("median://moengage/resetUser");
  },
  setAlias: function (alias) {
    return addCommandCallback("median://moengage/setAlias", { alias }, true);
  },
  trackEvent: function (eventName, eventData) {
    return addCommandCallback(
      "median://moengage/trackEvent",
      { eventName, eventData },
      true
    );
  },
  launchInbox: function () {
    return addCommandCallback("median://moengage/launchInbox");
  },
};

export default moengage;
