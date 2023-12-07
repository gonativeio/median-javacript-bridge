import { CallbackData, CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type OneSignalInfo = {
  oneSignalUserId: string;
  oneSignalPushToken: string;
  oneSignalSubscribed: boolean;
  oneSignalRequiresUserPrivacyConsent: boolean;
  platform: string;
  appId: string;
  appVersion: string;
  distribution: string;
  hardware: string;
  installationId: string;
  language: string;
  model: string;
  os: string;
  osVersion: string;
  timeZone: string;
} & Record<string, string | boolean | number>;

type OneSignalGetTagsData = CallbackData & {
  tags: Record<string, string>;
};

type OneSignalInAppMessageData = {
  clickName: string;
  clickUrl: string;
  firstClick: string;
  closesMessage: string;
};

const onesignal = {
  run: {
    onesignalInfo: function () {
      addCommand('median://run/gonative_onesignal_info');
    },
  },
  onesignalInfo: function (params: CallbackParams<OneSignalInfo>) {
    return addCommandCallback<OneSignalInfo>('median://run/gonative_onesignal_info', params, true);
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
    getTags: function (params: CallbackParams<OneSignalGetTagsData>) {
      return addCommandCallback<OneSignalGetTagsData>('median://onesignal/tags/get', params);
    },
    setTags: function (params: CallbackParams<CallbackData> & { tags: Record<string, string> }) {
      addCommand('median://onesignal/tags/set', params);
    },
    deleteTags: function (params: CallbackParams<CallbackData> & { tags?: string[] }) {
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
    addTrigger: function (params: { key: string; value: string }) {
      addCommand('median://onesignal/iam/addTrigger', params);
    },
    addTriggers: function (params: Record<string, string>) {
      addCommand('median://onesignal/iam/addTriggers', params);
    },
    removeTriggerForKey: function (key: string) {
      const params = { key: key };
      addCommand('median://onesignal/iam/removeTriggerForKey', params);
    },
    getTriggerValueForKey: function (key: string) {
      const params = { key: key };
      addCommand('median://onesignal/iam/getTriggerValueForKey', params);
    },
    pauseInAppMessages: function () {
      addCommand('median://onesignal/iam/pauseInAppMessages?pause=true');
    },
    resumeInAppMessages: function () {
      addCommand('median://onesignal/iam/pauseInAppMessages?pause=false');
    },
    setInAppMessageClickHandler: function (handler: (data: OneSignalInAppMessageData) => void) {
      addCommand('median://onesignal/iam/setInAppMessageClickHandler', { handler });
    },
  },
  externalUserId: {
    set: function (params: { externalId: string | number, callback?: string }) {
      return addCommandCallback('median://onesignal/externalUserId/set', params);
    },
    remove: function (params?: { callback?: string }) {
      return addCommandCallback('median://onesignal/externalUserId/remove', params);
    },
  },
  enableForegroundNotifications: function (enabled: boolean) {
    addCommand('median://onesignal/enableForegroundNotifications', { enabled });
  },
};

export default onesignal;
