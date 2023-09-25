import { addCommand, addCommandCallback } from "../utilities";

const appreview = {
  prompt: function (params) {
    if (params?.callback) {
      return addCommandCallback("median://appReview/prompt", params);
    } else addCommand("median://appReview/prompt");
  },
};

export default appreview;
