import { RowForm } from '@/components/Form';
import { InputForm } from '@/components/Form/Inputs';
import { Button } from '@/components/ui/button';
import { Plus, Trash } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';

export const ProductsInformation = () => {
  const { fields, append, remove } = useFieldArray({ name: 'productsData' });


  /*
    Fields:
    - productName
    - productDescription?
    - productPrice?
    - productImage?
  
  */

    const defaultProduct = {
      productName: '',
      productDescription: '',
      productPrice: '',
      productImage: '',
    }

  return (
    <div className="bg-background p-2 rounded-lg">
      <div className="flex w-full items-center justify-between mb-2">
        <p className="text-sm font-medium">Productos</p>

        <Button type="button" onClick={() => append(defaultProduct)}>
          <Plus />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col w-full items-center justify-between gap-2 [&>div]:w-full">
            <RowForm className="flex flex-row">
              <InputForm name={`productsData.${index}.productName`} label="Nombre del producto" placeholder="Agregar nombre del producto" />
            </RowForm>
            <RowForm className="flex flex-row">
              <InputForm name={`productsData.${index}.productDescription`} label="Descripción del producto" placeholder="Agregar descripción del producto" />
            </RowForm>
            <RowForm className="flex flex-row">
              <InputForm
                type='number'
                name={`productsData.${index}.productPrice`}
                label="Precio del producto"
                placeholder="Agregar precio del producto"
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
