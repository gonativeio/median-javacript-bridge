import { CallbackParams } from '../types';
import { addCommandCallback } from '../utils';

type ContactsGetResult = {
  success: boolean;
  contacts: {
    birthday?: string;
    namePrefix?: string;
    givenName?: string;
    middleName?: string;
    familyName?: string;
    previousFamilyName?: string;
    nameSuffix?: string;
    nickname?: string;
    phoneticGivenName?: string;
    phoneticMiddleName?: string;
    phoneticFamilyName?: string;
    organizationName?: string;
    departmentName?: string;
    jobTitle?: string;
    note?: string;
    phoneNumbers?: { label: string; phoneNumber: string }[];
    emailAddresses?: { label: string; emailAddress: string }[];
    postalAddresses?: {
      label: string;
      street: string;
      city: string;
      state: string;
      region: string;
      postalCode: string;
      country: string;
      isoCountryCode: string;
      subAdministrativeArea: string;
      subLocality: string;
    }[];
    companyName?: string;
    companyTitle?: string;
  }[];
};

type ContactsPermissionResult = { status: 'granted' | 'denied' | 'restricted' | 'notDetermined' };

const contacts = {
  getAll: function (params: CallbackParams<ContactsGetResult>) {
    return addCommandCallback<ContactsGetResult>('median://contacts/getAll', params);
  },
  getPermissionStatus: function (params: CallbackParams<ContactsPermissionResult>) {
    return addCommandCallback<ContactsPermissionResult>('median://contacts/getPermissionStatus', params);
  },
};

export default contacts;
