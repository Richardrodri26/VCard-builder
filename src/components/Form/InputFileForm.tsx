import { type DropzoneOptions } from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';
import { ITypeFile } from '../FileUploader';
import { UploadFileGeneral, type IUploadFileGeneralProps } from '../FileUploader/FileUploaderGeneral';
import { useUploadBackendFiles } from '@/hooks/useUploadBackendFiles';

interface IUploadFileFormContextProps extends Omit<IUploadFileGeneralProps, 'callback'> {
  name: string;
}

export const UploadFileFormContext = ({ name, dropzoneOpts, ...rest }: IUploadFileFormContextProps) => {
  const { setValue, getValues, formState, trigger } = useFormContext();

  const { handleUploadImage} = useUploadBackendFiles()

  const callback: (files: ITypeFile[] | null) => void = async files => {
    if (files) {
      const fileToSave = await handleUploadImage(files.map(file => file.nativeFile)[0]);

      setValue(name, [fileToSave], {
        shouldValidate: true,
      });
    }
  };


  const defaultValues: ITypeFile[] = getValues(name)?.fileName ? [{
    name: getValues(name)?.fileName,
  }]: [];

  const dropzoneOptHookForm: DropzoneOptions = {
    ...dropzoneOpts,
    onFileDialogCancel() {
      if (dropzoneOpts?.onFileDialogCancel) {
        dropzoneOpts?.onFileDialogCancel();
      }

      trigger(name);
    },
  };

  return (
    <>
      <Controller
        name={name}
        render={({ field }) => {
          return <UploadFileGeneral defaultFiles={defaultValues} ref={field.ref} callBack={callback} dropzoneOpts={dropzoneOptHookForm} {...rest} />;
        }}
      />

      {formState.errors && (
        <div className='my-1 text-sm text-destructive'>
          {Object.values(formState.errors).map((error, index) => (
            <p key={index}>{typeof error?.message === 'string' ? error.message : ''}</p>
          ))}
        </div>
      )}
    </>
  );
};
