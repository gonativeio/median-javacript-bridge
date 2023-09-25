import { addCommand } from "../utilities";

const appsflyer = {
  logEvent: function (eventName, eventValues) {
    addCommand("median://appsflyer/logEvent", { eventName, eventValues });
  },
  setCustomerUserId: function (userId) {
    addCommand("median://appsflyer/setCustomerUserId", { userId });
  },
};

export default appsflyer;
