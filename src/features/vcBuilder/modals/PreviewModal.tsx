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
import { PreviewVCardForm } from '../PreviewVCardForm';

export const PreviewModal = () => {
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button className="lg:hidden" variant="outline">
          Vista previa
        </Button>
      </CredenzaTrigger>
      <CredenzaContent className='min-h-[95%]'>
        <CredenzaHeader>
          <CredenzaTitle>Vista previa</CredenzaTitle>
          <CredenzaDescription>Esta es la vista previa de su VCard</CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <PreviewVCardForm />
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
