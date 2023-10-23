"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const cordial = {
    unsetContact: function (params) {
        if (params && params.callback) {
            return (0, utilities_1.addCommandCallback)("median://cordial/unsetContact", params);
        }
        else
            (0, utilities_1.addCommand)("median://cordial/unsetContact", params);
    },
    setContact: function (params) {
        if (params && params.callback) {
            return (0, utilities_1.addCommandCallback)("median://cordial/setContact", params);
        }
        else
            (0, utilities_1.addCommand)("median://cordial/setContact", params);
    },
    permissionStatus: function (params) {
        return (0, utilities_1.addCommandCallback)("median://cordial/permissionStatus", params, true);
    },
    requestPermission: function (params) {
        return (0, utilities_1.addCommandCallback)("median://cordial/requestPermission", params, true);
    },
};
exports.default = cordial;
//# sourceMappingURL=cordial.js.map