import { addCommand, addCommandCallback } from '../utils';

const onesignal = {
  run: {
    onesignalInfo: function () {
      addCommand('median://run/gonative_onesignal_info');
    },
  },
  onesignalInfo: function (params: any) {
    return addCommandCallback('median://run/gonative_onesignal_info', params, true);
  },
  register: function () {
    addCommand('median://onesignal/register');
  },
  userPrivacyConsent: {
    grant: function () {
      addCommand('median://onesignal/userPrivacyConsent/grant');
    },
    revoke: function () {
      addCommand('median://onesignal/userPrivacyConsent/revoke');
    },
  },
  tags: {
    getTags: function (params: any) {
      return addCommandCallback('median://onesignal/tags/get', params);
    },
    setTags: function (params: any) {
      addCommand('median://onesignal/tags/set', params);
    },
    deleteTags: function (params: any) {
      addCommand('median://onesignal/tags/delete', params);
    },
  },
  showTagsUI: function () {
    addCommand('median://onesignal/showTagsUI');
  },
  promptLocation: function () {
    addCommand('median://onesignal/promptLocation');
  },
  iam: {
    addTrigger: function (triggers: any) {
      if (triggers) {
        const keyLocal = Object.keys(triggers)[0];
        const params = {
          key: keyLocal,
          value: triggers[keyLocal],
        };
        addCommand('median://onesignal/iam/addTrigger', params);
      }
    },
    addTriggers: function (params: any) {
      addCommand('median://onesignal/iam/addTriggers', params);
    },
    removeTriggerForKey: function (key: any) {
      const params = { key: key };
      addCommand('median://onesignal/iam/removeTriggerForKey', params);
    },
    getTriggerValueForKey: function (key: any) {
      const params = { key: key };
      addCommand('median://onesignal/iam/getTriggerValueForKey', params);
    },
    pauseInAppMessages: function () {
      addCommand('median://onesignal/iam/pauseInAppMessages?pause=true');
    },
    resumeInAppMessages: function () {
      addCommand('median://onesignal/iam/pauseInAppMessages?pause=false');
    },
    setInAppMessageClickHandler: function (handler: any) {
      const params = { handler: handler };
      addCommand('median://onesignal/iam/setInAppMessageClickHandler', params);
    },
  },
  externalUserId: {
    set: function (params: any) {
      addCommand('median://onesignal/externalUserId/set', params);
    },
    remove: function () {
      addCommand('median://onesignal/externalUserId/remove');
    },
  },
  enableForegroundNotifications: function (enabled: any) {
    addCommand('median://onesignal/enableForegroundNotifications', {
      enabled,
    });
  },
};

export default onesignal;
