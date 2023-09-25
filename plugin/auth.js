import { addCommand, addCommandCallback } from "../utilities";

const auth = {
  status: function (params) {
    return addCommandCallback("median://auth/status", params);
  },
  save: function (params) {
    if (!(typeof params.secret === "string")) {
      params.secret = JSON.stringify(params.secret);
    }
    addCommand("median://auth/save", params);
  },
  get: function (params) {
    addCommand("median://auth/get", params);
  },
  delete: function (params) {
    addCommand("median://auth/delete", params);
  },
};

export default auth;
