import { RowForm } from '@/components/Form';
import { InputForm } from '@/components/Form/Inputs';
import { Button } from '@/components/ui/button';
import { ISocialLinks, ISocialLinksKeys } from '@/interfaces/VCard.interface';
import { Trash } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';
import { socialLinkIcons } from '../../constants';

export const SocialLinksInformationForm = () => {
  const { fields, remove, append } = useFieldArray({ name: 'socialLinks' });

  return (
    <div className="bg-background p-2 rounded-lg">
      <div className="flex w-full items-center justify-between mb-2">
        <p className="text-sm font-medium">Sitio web</p>
      </div>

      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col w-full items-center justify-between gap-2 [&>div]:w-full">
            <RowForm>
              <InputForm name={`socialLinks[${index}].title`} label="Título" placeholder="Título" className="w-full" />
              <InputForm
                name={`socialLinks[${index}].subTitle`}
                label="Subtítulo"
                placeholder="Subtítulo"
                className="w-full"
              />
            </RowForm>
            <InputForm
              name={`socialLinks[${index}].socialLink`}
              label="Enlace"
              placeholder="Enlace"
              className="w-full"
            />

            <Button onClick={() => remove(index)} className="mt-[19px]">
              <Trash />
            </Button>
          </div>
        ))}
      </div>

      <div className='flex gap-2 flex-wrap items-center mt-3'>
      {Object.entries(socialOptions).map(([key, value]) => (
        <Button
          key={key}
          onClick={() => append(value)}
          className="rounded-full size-[50px]"
        >
          {socialLinkIcons[value.icon]}
        </Button>
      ))}
    </div>


    </div>
  );
};

const socialOptions: Record<ISocialLinksKeys, ISocialLinks> = {
  Facebook: {
    icon: 'Facebook',
    title: 'Facebook',
    subTitle: 'Facebook',
    socialLink: ''
  },
  "Twitter": {
    icon: 'Twitter',
    title: 'Twitter',
    subTitle: 'Twitter',
    socialLink: ''
  },
  Instagram: {
    icon: 'Instagram',
    title: 'Instagram',
    subTitle: 'Instagram',
    socialLink: ''
  },
  Youtube: {
    icon: 'Youtube',
    title: 'Youtube',
    subTitle: 'Youtube',
    socialLink: ''
  },
  Tiktok: {
    icon: 'Tiktok',
    title: 'Tiktok',
    subTitle: 'Tiktok',
    socialLink: ''
  },
  Linkedin: {
    icon: 'Linkedin',
    title: 'Linkedin',
    subTitle: 'Linkedin',
    socialLink: ''
  },
  whatsapp: {
    icon: 'whatsapp',
    title: 'Whatsapp',
    subTitle: 'Whatsapp',
    socialLink: ''
  },
}


