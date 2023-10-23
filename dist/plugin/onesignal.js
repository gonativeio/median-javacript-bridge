"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const onesignal = {
    run: {
        onesignalInfo: function () {
            (0, utilities_1.addCommand)("median://run/gonative_onesignal_info");
        },
    },
    onesignalInfo: function (params) {
        return (0, utilities_1.addCommandCallback)("median://run/gonative_onesignal_info", params, true);
    },
    register: function () {
        (0, utilities_1.addCommand)("median://onesignal/register");
    },
    userPrivacyConsent: {
        grant: function () {
            (0, utilities_1.addCommand)("median://onesignal/userPrivacyConsent/grant");
        },
        revoke: function () {
            (0, utilities_1.addCommand)("median://onesignal/userPrivacyConsent/revoke");
        },
    },
    tags: {
        getTags: function (params) {
            return (0, utilities_1.addCommandCallback)("median://onesignal/tags/get", params);
        },
        setTags: function (params) {
            (0, utilities_1.addCommand)("median://onesignal/tags/set", params);
        },
        deleteTags: function (params) {
            (0, utilities_1.addCommand)("median://onesignal/tags/delete", params);
        },
    },
    showTagsUI: function () {
        (0, utilities_1.addCommand)("median://onesignal/showTagsUI");
    },
    promptLocation: function () {
        (0, utilities_1.addCommand)("median://onesignal/promptLocation");
    },
    iam: {
        addTrigger: function (triggers) {
            if (triggers) {
                var keyLocal = Object.keys(triggers)[0];
                var params = {
                    key: keyLocal,
                    value: triggers[keyLocal],
                };
                (0, utilities_1.addCommand)("median://onesignal/iam/addTrigger", params);
            }
        },
        addTriggers: function (params) {
            (0, utilities_1.addCommand)("median://onesignal/iam/addTriggers", params);
        },
        removeTriggerForKey: function (key) {
            var params = { key: key };
            (0, utilities_1.addCommand)("median://onesignal/iam/removeTriggerForKey", params);
        },
        getTriggerValueForKey: function (key) {
            var params = { key: key };
            (0, utilities_1.addCommand)("median://onesignal/iam/getTriggerValueForKey", params);
        },
        pauseInAppMessages: function () {
            (0, utilities_1.addCommand)("median://onesignal/iam/pauseInAppMessages?pause=true");
        },
        resumeInAppMessages: function () {
            (0, utilities_1.addCommand)("median://onesignal/iam/pauseInAppMessages?pause=false");
        },
        setInAppMessageClickHandler: function (handler) {
            var params = { handler: handler };
            (0, utilities_1.addCommand)("median://onesignal/iam/setInAppMessageClickHandler", params);
        },
    },
    externalUserId: {
        set: function (params) {
            (0, utilities_1.addCommand)("median://onesignal/externalUserId/set", params);
        },
        remove: function () {
            (0, utilities_1.addCommand)("median://onesignal/externalUserId/remove");
        },
    },
    enableForegroundNotifications: function (enabled) {
        (0, utilities_1.addCommand)("median://onesignal/enableForegroundNotifications", {
            enabled,
        });
    },
};
exports.default = onesignal;
//# sourceMappingURL=onesignal.js.map