import { addCommandCallback } from '../utils';

const plaid = {
  linkBank: function (params: any) {
    return addCommandCallback('median://plaid/linkBank', params);
  },
  verifyIdentity: function (params: any) {
    return addCommandCallback('median://plaid/verifyIdentity', params);
  },
};

export default plaid;
