import { FileInfo } from '@/domain/graphql';

export interface IThemeColors {
  from: string;
  to: string;
}

export interface IVCardData {
  themeColor?: IThemeColors;
  name?: string;
  subTitle?: string;
  profileImage?: FileInfo[];
  qrImage?: FileInfo[];
  description?: string;
  phoneData?: IPhoneData[];
  emailData?: IEmailData[];
  websiteData?: IWebsiteData[];
  addressData?: IAddressData[];
  companyData?: ICompanyData;
  socialLinks?: ISocialLinks[];
}

export interface IPhoneData {
  title?: string;
  phoneNumber: string;
}

export interface IEmailData {
  title?: string;
  email: string;
}

export interface IWebsiteData {
  title?: string;
  websiteUrl: string;
}

export interface IAddressData {
  streetAddress: string;
  postalCode?: string;
  country: string;
  region: string;
  city: string;
}

export interface ICompanyData {
  job?: string;
  companyName: string;
}

export interface ISocialLinks {
  icon: ISocialLinksKeys;
  title: string;
  socialLink: string;
  subTitle?: string;
}

export type ISocialLinksKeys = 'Facebook' | 'Twitter' | 'Instagram' | 'Youtube' | 'Tiktok' | 'Linkedin' | 'whatsapp';
