import Iphone15Pro from '@/components/ui/iphone-15-pro';
import { IVCardData } from '@/interfaces/VCard.interface';
import { getImageUrlFromFile } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

export const PreviewQrForm = () => {
  const { watch } = useFormContext<IVCardData>();

  const data = watch();

  const qrImageUrl = data?.qrImage?.[0]?.nativeFile ? getImageUrlFromFile(data?.qrImage?.[0]?.nativeFile) : undefined;

  return (
    <Iphone15Pro className="max-h-[400px] lg:max-h-[630px] mx-auto w-fit">
      <div className="flex justify-center items-center bg-white h-full w-full">
        <div style={{ backgroundImage: 'url(/QR_example.svg)' }} className="w-[90%] aspect-square bg-no-repeat bg-center bg-contain flex justify-center items-center">
          {
            qrImageUrl
              ? <img src={qrImageUrl} alt="Preview QR" className="size-28 aspect-square" />
              : null
          }
        </div>
      </div>
    </Iphone15Pro>
  );
};
