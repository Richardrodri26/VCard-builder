import { RowForm } from '@/components/Form';
import { InputForm } from '@/components/Form/Inputs';
import { Button } from '@/components/ui/button';
import { Plus, Trash } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';

export const AddressInformationForm = () => {
  const { fields, append, remove } = useFieldArray({ name: 'addressData' });

  return (
    <div className="bg-background p-2 rounded-lg">
      <div className="flex w-full items-center justify-between mb-2">
        <p className="text-sm font-medium">Dirección</p>

        <Button type="button" onClick={() => append({ title: '', websiteUrl: '' })}>
          <Plus />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col w-full items-center justify-between gap-2 [&>div]:w-full">
            <RowForm className="flex flex-row">
              <InputForm name={`addressData.${index}.city`} label="Ciudad" placeholder="Agregar ciudad" />

              {/* <InputForm
                name={`addressData.${index}.postalCode`}
                label="Código postal"
                placeholder="Agregar código postal"
              /> */}
            </RowForm>
            <RowForm className="flex flex-row">
              <InputForm name={`addressData.${index}.country`} label="País" placeholder="Agregar país" />
              {/* <InputForm name={`addressData.${index}.region`} label="Región" placeholder="Agregar región" /> */}
            </RowForm>
            <RowForm className="flex flex-row">
              <InputForm
                name={`addressData.${index}.streetAddress`}
                label="Dirección"
                placeholder="Agregar dirección"
              />
            </RowForm>

            <Button onClick={() => remove(index)} className="mt-[19px]">
              <Trash />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
