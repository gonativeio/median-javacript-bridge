import { addCommand, addCommandCallback } from '../utils';

type LocalPreferencesSaveResult = { status: string };

type LocalPreferencesSetParams = {
  key: string;
  value: string;
  statuscallback?: (data: LocalPreferencesSaveResult) => void;
};

type LocalPreferencesGetParams = {
  key: string;
  statuscallback?: (data: LocalPreferencesSaveResult) => void;
};

type LocalPreferencesDeleteParams = {
  key: string;
  statuscallback?: (data: LocalPreferencesSaveResult) => void;
};

type LocalPreferencesDeleteAllParams = {
  statuscallback?: (data: LocalPreferencesSaveResult) => void;
};

type LocalPreferencesWriteFileParams = {
  filename: string;
  data: string;
  statuscallback?: (data: LocalPreferencesSaveResult) => void;
};

type LocalPreferencesReadFileParams = {
  filename: string;
  callback?: (data: LocalPreferencesSaveResult) => void;
};

type LocalPreferencesDeleteFileParams = {
  filename: string;
  statuscallback?: (data: LocalPreferencesSaveResult) => void;
};

const localpreferences = {
  nonpersistent: {
    set: function (params: LocalPreferencesSetParams) {
      addCommand('median://localpreferences/nonpersistent/set', params);
    },
    get: function (params: LocalPreferencesGetParams) {
      return addCommandCallback<LocalPreferencesSaveResult>('median://localpreferences/nonpersistent/get', params);
    },
    delete: function (params: LocalPreferencesDeleteParams) {
      addCommand('median://localpreferences/nonpersistent/delete', params);
    },
    deleteAll: function (params: LocalPreferencesDeleteAllParams) {
      addCommand('median://localpreferences/nonpersistent/deleteAll', params);
    },
  },
  persistent: {
    set: function (params: LocalPreferencesSetParams) {
      addCommand('median://localpreferences/persistent/set', params);
    },
    get: function (params: LocalPreferencesGetParams) {
      return addCommandCallback<LocalPreferencesSaveResult>('median://localpreferences/persistent/get', params);
    },
    delete: function (params: LocalPreferencesDeleteParams) {
      addCommand('median://localpreferences/persistent/delete', params);
    },
    deleteAll: function (params: LocalPreferencesDeleteAllParams) {
      addCommand('median://localpreferences/persistent/deleteAll', params);
    },
  },
  filesystem: {
    save: function (params: LocalPreferencesWriteFileParams) {
      addCommand('median://localpreferences/filesystem/save', params);
    },
    read: function (params: LocalPreferencesReadFileParams) {
      return addCommandCallback<LocalPreferencesSaveResult>('median://localpreferences/filesystem/read', params);
    },
    delete: function (params: LocalPreferencesDeleteFileParams) {
      addCommand('median://localpreferences/filesystem/delete', params);
    },
  },
};

export default localpreferences;
