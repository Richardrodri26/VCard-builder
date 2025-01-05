import { InputForm } from '@/components/Form/Inputs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Plus, Trash } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';

export const ContactInformationForm = () => {
  return (
    <div className="py-2 flex flex-col gap-2">
      <ContactInformationPhone />
      <Separator className='w-full' />
      <ContactInformationEmail />
      <Separator className='w-full' />
      <ContactInformationWebsite />
    </div>
  );
};

const ContactInformationPhone = () => {
  const { fields, append, remove } = useFieldArray({ name: 'phoneData' });

  return (
    <div className="bg-background p-2 rounded-lg">
      <div className="flex w-full items-center justify-between">
        <p className="text-sm font-medium">Teléfono</p>

        <Button type='button' onClick={() => append({  title: '', phoneNumber: '' })}>
          <Plus />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col lg:flex-row w-full items-center justify-between gap-2">
            <InputForm name={`phoneData.${index}.title`} label={'Título'} placeholder="Agregar título" />
            <InputForm name={`phoneData.${index}.phoneNumber`} label={'Número'} placeholder="Agregar número" />

            <Button onClick={() => remove(index)} className='mt-[19px]'>
              <Trash />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactInformationEmail = () => {
  const { fields, append, remove } = useFieldArray({ name: 'emailData' });

  return (
    <div className="bg-background p-2 rounded-lg">
      <div className="flex w-full items-center justify-between">
        <p className="text-sm font-medium">Correo electrónico</p>

        <Button type='button' onClick={() => append({  title: '', email: '' })}>
          <Plus />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col lg:flex-row w-full items-center justify-between gap-2">
            <InputForm name={`emailData.${index}.title`} label={'Título'} placeholder="Agregar título" />
            <InputForm name={`emailData.${index}.email`} label={'Correo electrónico'} placeholder="Agregar correo electrónico" />

            <Button onClick={() => remove(index)} className='mt-[19px]'>
              <Trash />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactInformationWebsite = () => {
  const { fields, append, remove } = useFieldArray({ name: 'websiteData' });

  return (
    <div className="bg-background p-2 rounded-lg">
      <div className="flex w-full items-center justify-between">
        <p className="text-sm font-medium">Sitio web</p>

        <Button type='button' onClick={() => append({  title: '', websiteUrl: '' })}>
          <Plus />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col lg:flex-row w-full items-center justify-between gap-2">
            <InputForm name={`websiteData.${index}.title`} label={'Título'} placeholder="Agregar título" />
            <InputForm name={`websiteData.${index}.websiteUrl`} label={'URL'} placeholder="Agregar URL" />

            <Button onClick={() => remove(index)} className='mt-[19px]'>
              <Trash />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
