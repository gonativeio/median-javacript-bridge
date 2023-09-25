import { addCommand, addCommandCallback } from "../utilities";

const localpreferences = {
  nonpersistent: {
    set: function (params) {
      addCommand("median://localpreferences/nonpersistent/set", params);
    },
    get: function (params) {
      return addCommandCallback(
        "median://localpreferences/nonpersistent/get",
        params
      );
    },
    delete: function (params) {
      addCommand("median://localpreferences/nonpersistent/delete", params);
    },
    deleteAll: function (params) {
      addCommand("median://localpreferences/nonpersistent/deleteAll", params);
    },
  },
  persistent: {
    set: function (params) {
      addCommand("median://localpreferences/persistent/set", params);
    },
    get: function (params) {
      return addCommandCallback(
        "median://localpreferences/persistent/get",
        params
      );
    },
    delete: function (params) {
      addCommand("median://localpreferences/persistent/delete", params);
    },
    deleteAll: function (params) {
      addCommand("median://localpreferences/persistent/deleteAll", params);
    },
  },
  filesystem: {
    save: function (params) {
      addCommand("median://localpreferences/filesystem/save", params);
    },
    read: function (params) {
      return addCommandCallback(
        "median://localpreferences/filesystem/read",
        params
      );
    },
    delete: function (params) {
      addCommand("median://localpreferences/filesystem/delete", params);
    },
  },
};

export default localpreferences;
