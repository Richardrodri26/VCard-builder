import { UploadFileFormContext } from '@/components/Form/InputFileForm';
import { PreviewQrForm } from '../../PreviewQrForm';

export const SecondStep = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Agregue contenido para su VCard</h2>
      <p className='text-muted-foreground'>Puede agregar de manera opcional contenido para su qr.</p>
      <div className="flex gap-4 items-start justify-between w-full">
        <UploadFileFormContext
          title="Imagen de QR"
          name="qrImage"
          dropzoneOpts={{
            accept: {
              'image/*': ['.jpg', '.jpeg', '.png'],
            },
            maxFiles: 1,
            maxSize: 4 * 1024 * 1024,
            multiple: false,
          }}
        />

        <div className="hidden flex-[0.4] lg:flex flex-col justify-center items-start">
          <PreviewQrForm />
        </div>
      </div>
    </div>
  );
};
