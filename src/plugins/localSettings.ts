import { addCommand, addCommandCallback } from '../utils';

type LocalPreferencesSaveData = { status: string };

type LocalPreferencesSetParams = {
  key: string;
  value: string;
  statuscallback?: (data: LocalPreferencesSaveData) => void;
};

type LocalPreferencesGetParams = {
  key: string;
  statuscallback?: (data: LocalPreferencesSaveData) => void;
};

type LocalPreferencesDeleteParams = {
  key: string;
  statuscallback?: (data: LocalPreferencesSaveData) => void;
};

type LocalPreferencesDeleteAllParams = {
  statuscallback?: (data: LocalPreferencesSaveData) => void;
};

type LocalPreferencesWriteFileParams = {
  filename: string;
  data: string;
  statuscallback?: (data: LocalPreferencesSaveData) => void;
};

type LocalPreferencesReadFileParams = {
  filename: string;
  callback?: (data: LocalPreferencesSaveData) => void;
};

type LocalPreferencesDeleteFileParams = {
  filename: string;
  statuscallback?: (data: LocalPreferencesSaveData) => void;
};

const localpreferences = {
  nonpersistent: {
    set: function (params: LocalPreferencesSetParams) {
      addCommand('median://localpreferences/nonpersistent/set', params);
    },
    get: function (params: LocalPreferencesGetParams) {
      return addCommandCallback<LocalPreferencesSaveData>('median://localpreferences/nonpersistent/get', params);
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
      return addCommandCallback<LocalPreferencesSaveData>('median://localpreferences/persistent/get', params);
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
      return addCommandCallback<LocalPreferencesSaveData>('median://localpreferences/filesystem/read', params);
    },
    delete: function (params: LocalPreferencesDeleteFileParams) {
      addCommand('median://localpreferences/filesystem/delete', params);
    },
  },
};

export default localpreferences;
