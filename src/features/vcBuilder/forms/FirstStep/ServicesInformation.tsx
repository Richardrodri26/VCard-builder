import { RowForm } from '@/components/Form';
import { InputForm } from '@/components/Form/Inputs';
import { Button } from '@/components/ui/button';
import { Plus, Trash } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';

export const ServicesInformation = () => {
  const { fields, append, remove } = useFieldArray({ name: 'servicesData' });

  /*
    Fields:
    - serviceName
    - serviceDescription?
    - servicePrice?
    - serviceImage?
  
  */

  const defaultService = {
    serviceName: '',
    serviceDescription: '',
    servicePrice: '',
    serviceImage: '',
  };

  return (
    <div className="bg-background p-2 rounded-lg">
      <div className="flex w-full items-center justify-between mb-2">
        <p className="text-sm font-medium">Servicios</p>

        <Button type="button" onClick={() => append(defaultService)}>
          <Plus />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col w-full items-center justify-between gap-2 [&>div]:w-full">
            <RowForm className="flex flex-row">
              <InputForm
                name={`servicesData.${index}.serviceName`}
                label="Nombre del servicio"
                placeholder="Agregar nombre del servicio"
              />
            </RowForm>
            <RowForm className="flex flex-row">
              <InputForm
                name={`servicesData.${index}.serviceDescription`}
                label="Descripción del servicio"
                placeholder="Agregar descripción del servicio"
              />
            </RowForm>
            <RowForm className="flex flex-row">
              <InputForm
                type="number"
                name={`servicesData.${index}.servicePrice`}
                label="Precio del servicio"
                placeholder="Agregar precio del servicio"
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
