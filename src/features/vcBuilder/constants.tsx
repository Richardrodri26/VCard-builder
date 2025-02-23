import { FacebookIcon, InstagramIcon, LinkedinIcon, TiktokIcon, WhatsappIcon, XTwitterIcon, YoutubeIcon } from '@/components/Icons';
import { type ISocialLinksKeys } from '@/interfaces/VCard.interface';

export const colorThemes = {
  '1': {
    from: '#000957',
    to: '#344CB7',
  },
  '2': {
    from: '#123524',
    to: '#3E7B27',
  },
  '3': {
    from: '#A52A2A',
    to: '#FF6347',
  }
} as const;

export type colorThemesKeys = keyof typeof colorThemes;

export const socialLinkIcons: Record<ISocialLinksKeys, JSX.Element> = {
  Facebook: <FacebookIcon />,
  Twitter: <XTwitterIcon />,
  Instagram: <InstagramIcon />,
  Youtube: <YoutubeIcon />,
  Tiktok: <TiktokIcon />,
  Linkedin: <LinkedinIcon />,
  whatsapp: <WhatsappIcon />,
}