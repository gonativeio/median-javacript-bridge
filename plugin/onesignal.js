import { addCommand, addCommandCallback } from "../utilities";

const onesignal = {
  run: {
    onesignalInfo: function () {
      addCommand("median://run/gonative_onesignal_info");
    },
  },
  onesignalInfo: function (params) {
    return addCommandCallback(
      "median://run/gonative_onesignal_info",
      params,
      true
    );
  },
  register: function () {
    addCommand("median://onesignal/register");
  },
  userPrivacyConsent: {
    grant: function () {
      addCommand("median://onesignal/userPrivacyConsent/grant");
    },
    revoke: function () {
      addCommand("median://onesignal/userPrivacyConsent/revoke");
    },
  },
  tags: {
    getTags: function (params) {
      return addCommandCallback("median://onesignal/tags/get", params);
    },
    setTags: function (params) {
      addCommand("median://onesignal/tags/set", params);
    },
    deleteTags: function (params) {
      addCommand("median://onesignal/tags/delete", params);
    },
  },
  showTagsUI: function () {
    addCommand("median://onesignal/showTagsUI");
  },
  promptLocation: function () {
    addCommand("median://onesignal/promptLocation");
  },
  iam: {
    addTrigger: function (triggers) {
      if (triggers) {
        var keyLocal = Object.keys(triggers)[0];
        var params = {
          key: keyLocal,
          value: triggers[keyLocal],
        };
        addCommand("median://onesignal/iam/addTrigger", params);
      }
    },
    addTriggers: function (params) {
      addCommand("median://onesignal/iam/addTriggers", params);
    },
    removeTriggerForKey: function (key) {
      var params = { key: key };
      addCommand("median://onesignal/iam/removeTriggerForKey", params);
    },
    getTriggerValueForKey: function (key) {
      var params = { key: key };
      addCommand("median://onesignal/iam/getTriggerValueForKey", params);
    },
    pauseInAppMessages: function () {
      addCommand("median://onesignal/iam/pauseInAppMessages?pause=true");
    },
    resumeInAppMessages: function () {
      addCommand("median://onesignal/iam/pauseInAppMessages?pause=false");
    },
    setInAppMessageClickHandler: function (handler) {
      var params = { handler: handler };
      addCommand("median://onesignal/iam/setInAppMessageClickHandler", params);
    },
  },
  externalUserId: {
    set: function (params) {
      addCommand("median://onesignal/externalUserId/set", params);
    },
    remove: function () {
      addCommand("median://onesignal/externalUserId/remove");
    },
  },
  enableForegroundNotifications: function (enabled) {
    addCommand("median://onesignal/enableForegroundNotifications", {
      enabled,
    });
  },
};

export default onesignal;
