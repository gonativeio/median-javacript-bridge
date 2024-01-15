import { AnyData } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type InAppPurchaseParams = Record<string, AnyData> & {
  productID: string | null;
  offerToken?: string;
  previousProductID?: string;
  prorationMode?: string;
  replacementMode?: string;
};

type InAppPurchaseData = Record<string, AnyData> & {
  platform: string;
  allPurchases: AnyData[];
};

type InAppPurchaseInfo = {
  inAppPurchases: Record<string, AnyData> & {
    platform: string;
    products: (Record<string, AnyData> & {
      productID: string;
      price: string;
    })[];
  };
};

export type InAppPurchaseInfoReadyData = {
  inAppPurchases: Record<string, AnyData>;
};

const iap = {
  purchase: function (params: InAppPurchaseParams) {
    const productId = params.productID;
    params.productID = null;
    return addCommandCallback<InAppPurchaseData>('median://purchase/' + productId, params);
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
    return addCommandCallback<InAppPurchaseInfo>('median://iap/info');
  },
  refresh: function () {
    addCommand('median://iap/refresh');
  },
};

export default iap;
