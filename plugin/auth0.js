import { addCommand, addCommandCallback } from "../utilities";

const auth0 = {
  loginUniversal: function (params) {
    addCommand("median://auth0/loginUniversal", params);
  },
  logout: function (params) {
    addCommand("median://auth0/logout", params);
  },
  status: function (params) {
    return addCommandCallback("median://auth0/status", params);
  },
  save: function (params) {
    if (typeof params.secret !== "string") {
      params.secret = JSON.stringify(params.secret);
    }
    addCommand("median://auth0/save", params);
  },
  profile: function (params) {
    addCommandCallback("median://auth0/profile", params);
  },
  get: function (params) {
    addCommand("median://auth0/get", params);
  },
  delete: function (params) {
    addCommand("median://auth0/delete", params);
  },
};

export default auth0;
