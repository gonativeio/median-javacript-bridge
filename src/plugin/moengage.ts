import { addCommandCallback } from "../utilities";

const moengage = {
  notificationEnabled: function (params: any) {
    return addCommandCallback(
      "median://moengage/notificationEnabled",
      params,
      true
    );
  },
  promptNotification: function (params: any) {
    return addCommandCallback(
      "median://moengage/promptNotification",
      params,
      true
    );
  },
  setUniqueID: function (uniqueId: any) {
    return addCommandCallback(
      "median://moengage/setUniqueID",
      { uniqueId },
      true
    );
  },
  resetUser: function () {
    return addCommandCallback("median://moengage/resetUser");
  },
  setAlias: function (alias: any) {
    return addCommandCallback("median://moengage/setAlias", { alias }, true);
  },
  trackEvent: function (eventName: any, eventData: any) {
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
