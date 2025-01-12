import { RowForm } from '@/components/Form';
import { InputForm } from '../../../../components/Form/Inputs';
import { UploadFileFormContext } from '@/components/Form/InputFileForm';

export const PersonalInfoForm = () => {
  return (
    <div>
      <p>Imagen</p>
      <UploadFileFormContext
        title="Imagen de perfil"
        name="profileImage"
        dropzoneOpts={{
          accept: {
            'image/*': ['.jpg', '.jpeg', '.png', '.gif'],
          },
          maxFiles: 1,
          maxSize: 4 * 1024 * 1024,
          multiple: false,
        }}
      />

      <RowForm>
        <InputForm name="name" label={'Nombre'} placeholder="Agregar nombre" />
        <InputForm name="subTitle" label={'Subtitulo'} placeholder="Agregar subtitulo" />
      </RowForm>
      <InputForm name="description" label={'Descripción'} placeholder="Agregar descripción" />
    </div>
  );
};
