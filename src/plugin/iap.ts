import { addCommand, addCommandCallback } from '../utilities';

const iap = {
  purchase: function (params: any) {
    const productID = params.productID;
    params.productID = null;
    return addCommandCallback('median://purchase/' + productID, params);
  },
  manageSubscription: function (params: any) {
    addCommand('median://iap/manageSubscription', params);
  },
  manageAllSubscriptions: function () {
    addCommand('median://iap/manageAllSubscriptions');
  },
  restorePurchases: function () {
    addCommand('median://iap/restorePurchases');
  },
  info: function () {
    return addCommandCallback('median://iap/info');
  },
  refresh: function () {
    addCommand('median://iap/refresh');
  },
};

export default iap;