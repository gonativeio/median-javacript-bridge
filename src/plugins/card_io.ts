import { addCommandCallback } from '../utils';

type CardIoScanResult = {
  cardNumber: string;
  cardholderName: string;
  expiryMonth: number;
  expiryYear: number;
  cardType: 'visa' | 'mastercard' | 'amex' | 'discover' | 'jcb';
};

type CardIoScanParams = {
  callback?: (data: CardIoScanResult) => void;
  requireExpiry?: boolean;
  scanExpiry?: boolean;
  requireCVV?: boolean;
  requirePostalCode?: boolean;
  numericPostalCode?: boolean;
  requireCardholderName?: boolean;
  useCardIOLogo?: boolean;
  hideCardIOLogo?: boolean;
  instructions?: string;
};

const card_io = {
  scanCard: function (params: CardIoScanParams) {
    return addCommandCallback<CardIoScanResult>('median://card.io/scanCard', params);
  },
};

export default card_io;
