export function addCommandCallback(command, params, persistCallback) {
    if(params && params.callback){
        // execute command with provided callback function
        addCommand(command, params, persistCallback);
    } else {
        // create a temporary function and return a promise that executes command
        var tempFunctionName = '_gonative_temp_' + Math.random().toString(36).slice(2);
        if(!params) params = {};
        params.callback = tempFunctionName;
        return new Promise(function(resolve, reject) {
            // declare a temporary function
            window[tempFunctionName] = function(data) {
                resolve(data);
                delete window[tempFunctionName];
            }
            // execute command
            addCommand(command, params);
        });
    }
}

export function addCallbackFunction(callbackFunction, persistCallback){
    var callbackName;
    if(typeof callbackFunction === 'string'){
        callbackName = callbackFunction;
    } else {
        callbackName = '_gonative_temp_' + Math.random().toString(36).slice(2);
        window[callbackName] = function(...args) {
            callbackFunction.apply(null, args);
            if(!persistCallback){ // if callback is used just once
                delete window[callbackName];
            }
        }
    }
    return callbackName;
}

export function addCommand(command, params, persistCallback){
    var data = undefined;
    if(params) {
        var commandObject = {};
        if(params.callback && typeof params.callback === 'function'){
            params.callback = addCallbackFunction(params.callback, persistCallback);
        }
        if(params.callbackFunction && typeof params.callbackFunction === 'function'){
            params.callbackFunction = addCallbackFunction(params.callbackFunction, persistCallback);
        }
        if(params.statuscallback && typeof params.statuscallback === 'function'){
            params.statuscallback = addCallbackFunction(params.statuscallback, persistCallback);
        }
        commandObject.gonativeCommand = command;
        commandObject.data = params;
        data = JSON.stringify(commandObject);
    } else data = command;

    JSBridge.postMessage(data);
}