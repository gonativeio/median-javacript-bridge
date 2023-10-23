"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommand = exports.addCallbackFunction = exports.addCommandCallback = void 0;
function addCommandCallback(command, params, persistCallback) {
    if (params && params.callback) {
        // execute command with provided callback function
        addCommand(command, params, persistCallback);
    }
    else {
        // create a temporary function and return a promise that executes command
        var tempFunctionName = "_gonative_temp_" + Math.random().toString(36).slice(2);
        if (!params)
            params = {};
        params.callback = tempFunctionName;
        return new Promise(function (resolve) {
            // declare a temporary function
            window[tempFunctionName] = function (data) {
                resolve(data);
                delete window[tempFunctionName];
            };
            // execute command
            addCommand(command, params);
        });
    }
}
exports.addCommandCallback = addCommandCallback;
function addCallbackFunction(callbackFunction, persistCallback) {
    var callbackName;
    if (typeof callbackFunction === "string") {
        callbackName = callbackFunction;
    }
    else {
        callbackName = "_gonative_temp_" + Math.random().toString(36).slice(2);
        window[callbackName] = function (...args) {
            callbackFunction.apply(null, args);
            if (!persistCallback) {
                // if callback is used just once
                delete window[callbackName];
            }
        };
    }
    return callbackName;
}
exports.addCallbackFunction = addCallbackFunction;
function addCommand(command, params, persistCallback) {
    var _a, _b, _c;
    var data = undefined;
    if (params) {
        var commandObject = {};
        if (params.callback && typeof params.callback === "function") {
            params.callback = addCallbackFunction(params.callback, persistCallback);
        }
        if (params.callbackFunction &&
            typeof params.callbackFunction === "function") {
            params.callbackFunction = addCallbackFunction(params.callbackFunction, persistCallback);
        }
        if (params.statuscallback && typeof params.statuscallback === "function") {
            params.statuscallback = addCallbackFunction(params.statuscallback, persistCallback);
        }
        commandObject.gonativeCommand = command;
        commandObject.data = params;
        data = JSON.stringify(commandObject);
    }
    else
        data = command;
    (_c = (_b = (_a = window.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.JSBridge) === null || _c === void 0 ? void 0 : _c.postMessage(data);
}
exports.addCommand = addCommand;
//# sourceMappingURL=utilities.js.map