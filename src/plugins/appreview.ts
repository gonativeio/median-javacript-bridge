import { addCommand, addCommandCallback } from '../utils';

type AppReviewPromptParams = {
  callback: () => void;
};

const appreview = {
  prompt: function (params?: AppReviewPromptParams) {
    if (params) {
      return addCommandCallback('median://appReview/prompt', params);
    }
    addCommand('median://appReview/prompt');
  },
};

export default appreview;
