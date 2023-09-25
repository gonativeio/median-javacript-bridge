import { addCommandCallback } from "../utilities";

const plaid = {
  linkBank: function (params) {
    return addCommandCallback("median://plaid/linkBank", params);
  },
  verifyIdentity: function (params) {
    return addCommandCallback("median://plaid/verifyIdentity", params);
  },
};

export default plaid;
