import { addCommand, addCommandCallback } from '../utils';

const clipboard = {
  set: function (params: { data: string }) {
    addCommand('median://clipboard/set', params);
  },
  get: function (params: any) {
    return addCommandCallback('median://clipboard/get', params);
  },
};

const config = {
  set: function (params: any) {
    addCommand('median://config/set', params);
  },
};

const connectivity = {
  get: function (params: any) {
    return addCommandCallback('median://connectivity/get', params);
  },
  subscribe: function (params: any) {
    return addCommandCallback('median://connectivity/subscribe', params, true);
  },
  unsubscribe: function () {
    addCommand('median://connectivity/unsubscribe');
  },
};

const deviceInfo = function (params: any) {
  return addCommandCallback('median://run/median_device_info', params, true);
};

const internalExternal = {
  set: function (params: any) {
    addCommand('median://internalExternal/set', params);
  },
};

const keyboard = {
  info: function () {
    return addCommandCallback('median://keyboard/info');
  },
  listen: function (callback: any) {
    addCommand('median://keyboard/listen', { callback });
  },
  showAccessoryView: function (visible: boolean) {
    addCommand('median://keyboard/showAccessoryView', { visible });
  },
};

const nativebridge = {
  custom: function (params: any) {
    addCommand('median://nativebridge/custom', params);
  },
  multi: function (params: any) {
    addCommand('median://nativebridge/multi', params);
  },
};

const navigationLevels = {
  set: function (parameters: any) {
    const params = {
      persist: parameters.persist,
      data: parameters,
    };
    addCommand('median://navigationLevels/set', params);
  },
  setCurrent: function (params: any) {
    addCommand('median://navigationLevels/set', params);
  },
  revert: function () {
    addCommand('median://navigationLevels/set?persist=true');
  },
};

const navigationMaxWindows = {
  set: function (maxWindows: number, autoClose: boolean) {
    const params = {
      data: maxWindows,
      autoClose: autoClose,
      persist: true,
    };
    addCommand('median://navigationMaxWindows/set', params);
  },
  setCurrent: function (maxWindows: number, autoClose: boolean) {
    const params = { data: maxWindows, autoClose: autoClose };
    addCommand('median://navigationMaxWindows/set', params);
  },
};

const navigationTitles = {
  set: function (parameters: any) {
    const params = {
      persist: parameters.persist,
      data: parameters,
    };
    addCommand('median://navigationTitles/set', params);
  },
  setCurrent: function (params: any) {
    addCommand('median://navigationTitles/setCurrent', params);
  },
  revert: function () {
    addCommand('median://navigationTitles/set?persist=true');
  },
};

const open = {
  appSettings: function () {
    addCommand('median://open/app-settings');
  },
};

const registration = {
  send: function (customData: any) {
    addCommand('median://registration/send', { customData });
  },
};

const run = {
  deviceInfo: function () {
    addCommand('median://run/median_device_info');
  },
};

const screen = {
  setBrightness: function (data: any) {
    let params = data;
    if (typeof params === 'number') {
      params = { brightness: data };
    }
    addCommand('median://screen/setBrightness', params);
  },
  setMode: function (params: any) {
    if (params.mode) {
      addCommand('median://screen/setMode', params);
    }
  },
  keepScreenOn: function (params: any) {
    addCommand('median://screen/keepScreenOn', params);
  },
  keepScreenNormal: function () {
    addCommand('median://screen/keepScreenNormal');
  },
};

const share = {
  sharePage: function (params: any) {
    addCommand('median://share/sharePage', params);
  },
  downloadFile: function (params: any) {
    addCommand('median://share/downloadFile', params);
  },
  downloadImage: function (params: any) {
    addCommand('median://share/downloadImage', params);
  },
};

const sidebar = {
  setItems: function (params: any) {
    addCommand('median://sidebar/setItems', params);
  },
  getItems: function (params: any) {
    return addCommandCallback('median://sidebar/getItems', params);
  },
};

const statusbar = {
  set: function (params: any) {
    addCommand('median://statusbar/set', params);
  },
  matchBodyBackgroundColor: function (params: any) {
    addCommand('median://statusbar/matchBodyBackgroundColor', params);
  },
};

const tabNavigation = {
  selectTab: function (tabIndex: number) {
    addCommand('median://tabs/select/' + tabIndex);
  },
  deselect: function () {
    addCommand('median://tabs/deselect');
  },
  setTabs: function (tabs: any) {
    addCommand('median://tabs/setTabs', { tabs });
  },
};

const webconsolelogs = {
  print: function (params: any) {
    addCommand('median://webconsolelogs/print', params);
  },
};

const webview = {
  clearCache: function () {
    addCommand('median://webview/clearCache');
  },
  clearCookies: function () {
    addCommand('median://webview/clearCookies');
  },
  reload: function () {
    addCommand('median://webview/reload');
  },
};

const window = {
  open: function (urlString: string) {
    addCommand('median://window/open', { url: urlString });
  },
  close: function () {
    addCommand('median://window/close');
  },
};

export {
  clipboard,
  config,
  connectivity,
  deviceInfo,
  internalExternal,
  keyboard,
  nativebridge,
  navigationLevels,
  navigationMaxWindows,
  navigationTitles,
  open,
  registration,
  run,
  screen,
  share,
  sidebar,
  statusbar,
  tabNavigation,
  webconsolelogs,
  webview,
  window,
};
