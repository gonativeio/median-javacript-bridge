import { addCommand, addCommandCallback } from '../utils';

const appreview = {
  prompt: function (params: any) {
    if (params?.callback) {
      return addCommandCallback('median://appReview/prompt', params);
    } else addCommand('median://appReview/prompt');
  },
};

export default appreview;
