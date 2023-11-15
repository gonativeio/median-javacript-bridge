import { addCommand, addCommandCallback } from '../utilities';

const socialLogin = {
  facebook: {
    login: function (params: any) {
      if (params.callback) {
        return addCommandCallback('median://socialLogin/facebook/login', params);
      } else addCommand('median://socialLogin/facebook/login', params);
    },
    logout: function (params: any) {
      if (params.callback) {
        return addCommandCallback('median://socialLogin/facebook/logout', params);
      } else addCommand('median://socialLogin/facebook/logout', params);
    },
  },
  google: {
    login: function (params: any) {
      if (params.callback) {
        return addCommandCallback('median://socialLogin/google/login', params);
      } else addCommand('median://socialLogin/google/login', params);
    },
    logout: function (params: any) {
      if (params.callback) {
        return addCommandCallback('median://socialLogin/google/logout', params);
      } else addCommand('median://socialLogin/google/logout', params);
    },
  },
  apple: {
    login: function (params: any) {
      if (params.callback) {
        return addCommandCallback('median://socialLogin/apple/login', params);
      } else addCommand('median://socialLogin/apple/login', params);
    },
  },
};

export default socialLogin;
