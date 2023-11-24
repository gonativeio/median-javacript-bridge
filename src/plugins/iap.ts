import { AnyData } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type InAppPurchaseParams = Record<string, AnyData> & {
  productID: string | null;
  offerToken?: string;
  previousProductID?: string;
  prorationMode?: string;
  replacementMode?: string;
};

type InAppPurchaseResult = Record<string, AnyData> & {
  platform: string;
  allPurchases: AnyData[];
};

type InAppPurchaseInfoResult = {
  inAppPurchases: Record<string, AnyData> & {
    platform: string;
    products: (Record<string, AnyData> & {
      productID: string;
      price: string;
    })[];
  };
};

const iap = {
  purchase: function (params: InAppPurchaseParams) {
    const productId = params.productID;
    params.productID = null;
    return addCommandCallback<InAppPurchaseResult>('median://purchase/' + productId, params);
  },
  manageSubscription: function (params: { productID: string }) {
    addCommand('median://iap/manageSubscription', params);
  },
  manageAllSubscriptions: function () {
    addCommand('median://iap/manageAllSubscriptions');
  },
  restorePurchases: function () {
    addCommand('median://iap/restorePurchases');
  },
  info: function () {
    return addCommandCallback<InAppPurchaseInfoResult>('median://iap/info');
  },
  refresh: function () {
    addCommand('median://iap/refresh');
  },
};

export default iap;
