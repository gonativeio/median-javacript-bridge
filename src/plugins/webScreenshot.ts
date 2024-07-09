import { addCommand } from '../utils';

interface HtmlCanvasOptions {
  useCORS: boolean;
  scale: number;
}

declare global {
  interface Window {
    html2canvas: (element: HTMLElement, options?: HtmlCanvasOptions) => Promise<HTMLCanvasElement>;
  }
}

export interface WebScreenshotParams {
  url?: string;
  text?: string;
}

const webScreenshot = {
  shareScreen: function (params: WebScreenshotParams) {
    addCommand('median://webScreenshot/shareScreen', params);
  },
  shareElement: function (element: HTMLElement, params?: WebScreenshotParams) {
    if (!window.html2canvas) {
      return;
    }
    window.html2canvas(element, { useCORS: true, scale: 1.25 }).then((canvas) => {
      const dataUrl = canvas.toDataURL();
      addCommand('median://webScreenshot/shareElement', { dataUrl, ...params });
    });
  },
};

export default webScreenshot;
