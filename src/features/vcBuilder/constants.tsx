import { type ISocialLinksKeys } from '@/interfaces/VCard.interface';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const colorThemes = {
  '1': {
    from: '#000957',
    to: '#344CB7',
  },
  '2': {
    from: '#123524',
    to: '#3E7B27',
  },
} as const;

export const socialLinkIcons: Record<ISocialLinksKeys, JSX.Element> = {
  Facebook: <Facebook />,
  Twitter: <Twitter />,
  Instagram: <Instagram />,
  Youtube: <Youtube />,
  Tiktok: <Youtube />,
  Linkedin: <Linkedin />,
  whatsapp: <Youtube />,
}