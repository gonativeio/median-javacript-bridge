import { CallbackParams } from '../types';
import { addCommand, addCommandCallback } from '../utils';

const appreview = {
  prompt: function (params?: CallbackParams) {
    if (params) {
      return addCommandCallback('median://appReview/prompt', params);
    }
    addCommand('median://appReview/prompt');
  },
};

export default appreview;
