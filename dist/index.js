"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Median_onReadyCallback;
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = require("./plugin");
class Median {
    constructor() {
        this.isNativeApp = () => {
            return (window &&
                window.webkit &&
                window.webkit.messageHandlers &&
                window.webkit.messageHandlers.JSBridge);
        };
        _Median_onReadyCallback.set(this, void 0);
        this.onReady = (callback) => {
            if (typeof callback === "function") {
                __classPrivateFieldSet(this, _Median_onReadyCallback, callback, "f");
                let counter = 0;
                const intervalFunction = setInterval(() => {
                    counter += 1;
                    if (this.isNativeApp() && __classPrivateFieldGet(this, _Median_onReadyCallback, "f")) {
                        __classPrivateFieldGet(this, _Median_onReadyCallback, "f").call(this);
                        __classPrivateFieldSet(this, _Median_onReadyCallback, undefined, "f");
                    }
                    if (counter >= 50 || !__classPrivateFieldGet(this, _Median_onReadyCallback, "f")) {
                        clearInterval(intervalFunction);
                    }
                }, 100);
            }
        };
        this.admob = plugin_1.admob;
        this.appreview = plugin_1.appreview;
        this.appsflyer = plugin_1.appsflyer;
        this.auth = plugin_1.auth;
        this.auth0 = plugin_1.auth0;
        this.autorefresh = plugin_1.autorefresh;
        this.backgroundLocation = plugin_1.backgroundLocation;
        this.backgroundMedia = plugin_1.backgroundMedia;
        this.barcode = plugin_1.barcode;
        this.beacon = plugin_1.beacon;
        this.braze = plugin_1.braze;
        this.card_io = plugin_1.card_io;
        this.contacts = plugin_1.contacts;
        this.cordial = plugin_1.cordial;
        this.documentScanner = plugin_1.documentScanner;
        this.downloads = plugin_1.downloads;
        this.esmiley = plugin_1.esmiley;
        this.facebook = plugin_1.facebook;
        this.firebaseAnalytics = plugin_1.firebaseAnalytics;
        this.haptics = plugin_1.haptics;
        this.iap = plugin_1.iap;
        this.intercom = plugin_1.intercom;
        this.kaltura = plugin_1.kaltura;
        this.localpreferences = plugin_1.localpreferences;
        this.modal = plugin_1.modal;
        this.moengage = plugin_1.moengage;
        this.moxo = plugin_1.moxo;
        this.nativebridge = plugin_1.nativebridge;
        this.onesignal = plugin_1.onesignal;
        this.opentok = plugin_1.opentok;
        this.permissions = plugin_1.permissions;
        this.plaid = plugin_1.plaid;
        this.purchase = plugin_1.purchase;
        this.socialLogin = plugin_1.socialLogin;
        this.storage = plugin_1.storage;
        this.twilio = plugin_1.twilio;
    }
}
_Median_onReadyCallback = new WeakMap();
exports.default = new Median();
//# sourceMappingURL=index.js.map