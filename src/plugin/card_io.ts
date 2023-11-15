import { addCommandCallback } from '../utilities';

const card_io = {
  scanCard: function (params: any) {
    return addCommandCallback('median://card.io/scanCard', params);
  },
};

export default card_io;