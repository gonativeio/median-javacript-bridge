export type AnyType = boolean | number | string;

export type AnyData = Record<string, AnyType | AnyType[] | Record<string, AnyType>>;

export type DeviceInfo = {
  platform: 'ios' | 'android';
  appId: string;
  appVersion: string;
  appBuild: string;
  carrierNames: string[];
  distribution: string;
  hardware: string;
  installationId: string;
  apnsToken?: string;
  fcmToken?: string;
  language: string;
  model: string;
  os: string;
  osVersion: string;
  timeZone: string;
  isFirstLaunch: boolean;
} & Record<string, string | boolean | number>;

export type KeyboardInfo = {
  visible: boolean;
  keyboardWindowSize: {
    width: number;
    height: number;
  };
  visibleWindowSize: {
    width: number;
    height: number;
  };
};
