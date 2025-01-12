import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from '@/components/ResponsiveModal';
import { Button } from '@/components/ui/button';
import { PreviewQrForm } from '../PreviewQrForm';

export const PreviewQRModal = () => {
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button className="lg:hidden" variant="outline">
          Vista previa
        </Button>
      </CredenzaTrigger>
      <CredenzaContent className="min-h-[95%]">
        <CredenzaHeader>
          <CredenzaTitle>Vista previa</CredenzaTitle>
          <CredenzaDescription>Esta es la vista previa de su QR</CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <PreviewQrForm />
        </CredenzaBody>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <Button>Cerrar</Button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
};
