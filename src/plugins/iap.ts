import { AnyData, CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';

type InAppPurchaseParams = Record<string, AnyData> & {
  productID: string | null;
  offerToken?: string;
  previousProductID?: string;
  prorationMode?: string;
  replacementMode?: string;
};

type InAppPurchaseData = Record<string, AnyData> & {
  error?: string;
  productId: string;
  transactionId: string;
  transactionDate: string;
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

type InAppPurchasePurchases = {
  activeSubscriptions: string[];
  hasValidReceipt: boolean;
  platform: string;
  allPurchases: (Record<string, AnyData> & {
    purchaseDateString: string;
    transactionIdentifier: string;
    webOrderLineItemID: number;
    originalPurchaseDateString: string;
    quantity: 1;
    productIdentifier: string;
    originalTransactionIdentifier: string;
    cancellationDateString: string;
    subscriptionExpirationDateString: string;
  })[];
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
  purchases: function (params: CallbackParams) {
    return addCommandCallback<InAppPurchasePurchases>('median://iap/purchases', params);
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
