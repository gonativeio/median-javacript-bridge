import { addCommand } from '../utils';

const calendar = {
  download: function (params: { url: string }) {
    addCommand('gonative://calendar/download', params);
  },
};

export default calendar;
