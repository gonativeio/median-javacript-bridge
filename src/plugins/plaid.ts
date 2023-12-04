import { CallbackParams } from '../types';
import { addCommandCallback } from '../utils';

type PlaidLinkBankResult = {
  success: boolean;
  error?: string;
  linkSessionID: string;
  publicToken?: string;
};

const plaid = {
  linkBank: function (params: CallbackParams<PlaidLinkBankResult> & { linkToken: string }) {
    return addCommandCallback<PlaidLinkBankResult>('median://plaid/linkBank', params);
  },
  verifyIdentity: function (params: CallbackParams<PlaidLinkBankResult> & { linkToken: string }) {
    return addCommandCallback<PlaidLinkBankResult>('median://plaid/verifyIdentity', params);
  },
};

export default plaid;
