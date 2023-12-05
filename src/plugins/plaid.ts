import { CallbackParams } from '../types';
import { addCommandCallback } from '../utils';

type PlaidLinkBankData = {
  success: boolean;
  error?: string;
  linkSessionID: string;
  publicToken?: string;
};

const plaid = {
  linkBank: function (params: CallbackParams<PlaidLinkBankData> & { linkToken: string }) {
    return addCommandCallback<PlaidLinkBankData>('median://plaid/linkBank', params);
  },
  verifyIdentity: function (params: CallbackParams<PlaidLinkBankData> & { linkToken: string }) {
    return addCommandCallback<PlaidLinkBankData>('median://plaid/verifyIdentity', params);
  },
};

export default plaid;
