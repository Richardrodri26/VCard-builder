import { Cards, CardsCreateInput } from '@/domain/graphql';
import { ISocialLinksKeys, IVCardData } from '@/interfaces/VCard.interface';
import { colorThemes } from './constants';

export function transformVCardData(input: Cards): Partial<IVCardData> {
  return {
    qrImage: [],
    themeColor: {
      from: input?.colorPrincipal || colorThemes['1'].from,
      to: input?.colorSegundario || colorThemes['1'].to,
    }, // Ajusta según sea necesario
    profileImage: input.imageProfile ? [input.imageProfile] : [],
    name: input?.title || undefined, // Debe ajustarse a una propiedad relevante
    subTitle: input?.subTitle || undefined,
    description: input?.description || undefined,
    phoneData: input.cardsPhones.map((phone) => ({
      title: phone?.title || '',
      phoneNumber: phone?.phone || '',
    })),
    emailData: input.cardsEmails.map((email) => ({
      title: email?.title || '',
      email: email?.email || '', // Asume que hay una propiedad 'email'
    })),
    websiteData: input.cardsWeb.map((web: any) => ({
      title: web?.title,
      websiteUrl: web?.web,
    })),
    addressData: input.cardsAddress.map((address) => ({
      title: address?.title || '',
      websiteUrl: address?.websiteUrl || '',
      city: address?.city || '',
      postalCode: address?.postalCode || '',
      country: address?.country || '',
      region: address?.region || '',
      streetAddress: address?.streetAddress || '',
    })),
    companyData: {
      companyName: 'Empresa de Andres Falta campo', // Ajustar a una propiedad relevante si está disponible
      job: 'Desarrollador Falta campo',
    },
    socialLinks: input?.cardsSocial.map((social) => ({
      icon: (social?.icono as ISocialLinksKeys) || '',
      title: social?.title || '',
      subTitle: 'Falta este campo',
      socialLink: social?.url || '',
    })),
  };
}

export function transformToCards(input: IVCardData): CardsCreateInput {
  return {
    card: {
      title: input.name || '',
      description: input.description || '',
      subTitle: input.subTitle || '',
      colorPrincipal: input?.themeColor?.from, // Ajustar si hay un campo relevante
      colorSegundario: input?.themeColor?.to, // Ajustar si hay un campo relevante
      isActive: true,
    },
    imageProfileId: input?.profileImage?.[0]?.id || '',
    cardEmail: input.emailData!.map((email) => ({
      title: email.title || '',
      email: email.email || '',
    })),
    cardPhone: input.phoneData!.map((phone) => ({
      title: phone.title || '',
      phone: phone.phoneNumber || '',
      icono: 'phoneCompany', // Ajustar si hay un campo relevante
    })),
    cardWeb: input.websiteData!.map((web) => ({
      title: web.title || '',
      web: web.websiteUrl || '',
      icono: 'webIcono', // Ajustar si hay un campo relevante,
    })),
    cardSocial: input.socialLinks!.map((social) => ({
      title: social.title || '',
      url: social.socialLink || '',
      typeSocial: social.icon as ISocialLinksKeys,
      icono: social.icon as ISocialLinksKeys,
    })),
    cardAddress: input.addressData!.map((address) => ({
      // title: address.title || "",
      websiteUrl: 'Que jeste campo',
      city: address.city || '',
      postalCode: address.postalCode || '',
      country: address.country || '',
      region: address.region || '',
      streetAddress: address.streetAddress || '',
    })),
  };
}
