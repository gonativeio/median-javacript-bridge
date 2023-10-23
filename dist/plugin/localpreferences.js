"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const localpreferences = {
    nonpersistent: {
        set: function (params) {
            (0, utilities_1.addCommand)("median://localpreferences/nonpersistent/set", params);
        },
        get: function (params) {
            return (0, utilities_1.addCommandCallback)("median://localpreferences/nonpersistent/get", params);
        },
        delete: function (params) {
            (0, utilities_1.addCommand)("median://localpreferences/nonpersistent/delete", params);
        },
        deleteAll: function (params) {
            (0, utilities_1.addCommand)("median://localpreferences/nonpersistent/deleteAll", params);
        },
    },
    persistent: {
        set: function (params) {
            (0, utilities_1.addCommand)("median://localpreferences/persistent/set", params);
        },
        get: function (params) {
            return (0, utilities_1.addCommandCallback)("median://localpreferences/persistent/get", params);
        },
        delete: function (params) {
            (0, utilities_1.addCommand)("median://localpreferences/persistent/delete", params);
        },
        deleteAll: function (params) {
            (0, utilities_1.addCommand)("median://localpreferences/persistent/deleteAll", params);
        },
    },
    filesystem: {
        save: function (params) {
            (0, utilities_1.addCommand)("median://localpreferences/filesystem/save", params);
        },
        read: function (params) {
            return (0, utilities_1.addCommandCallback)("median://localpreferences/filesystem/read", params);
        },
        delete: function (params) {
            (0, utilities_1.addCommand)("median://localpreferences/filesystem/delete", params);
        },
    },
};
exports.default = localpreferences;
//# sourceMappingURL=localpreferences.js.map