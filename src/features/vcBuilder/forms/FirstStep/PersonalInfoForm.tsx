import { RowForm } from '@/components/Form';
import { InputForm } from '../../../../components/Form/Inputs';

export const PersonalInfoForm = () => {
  return (
    <div>
      <p>Imagen</p>

      <RowForm>
        <InputForm name="name" label={'Nombre'} placeholder="Agregar nombre" />
        <InputForm name="subTitle" label={'Subtitulo'} placeholder="Agregar subtitulo" />
      </RowForm>
      <InputForm name="description" label={'Descripción'} placeholder="Agregar descripción" />
    </div>
  );
};
