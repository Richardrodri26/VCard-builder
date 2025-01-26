import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { defineStepper, Stepper } from '@stepperize/react';
import React from 'react';
import { PreviewModal } from './modals/PreviewModal';
import { BasicFormProviderZod } from '@/components/Form';
import { FirstStep } from './forms/FirstStep';
import { SecondStep } from './forms/SecondStep';
import { PreviewQRModal } from './modals/PreviewQRModal';
import { ThirdStep } from './forms/ThirdStep';
import { VCardSchemaType } from './schemas';
import { useFormContext } from 'react-hook-form';
import { IVCardData } from '@/interfaces/VCard.interface';
import {useCreateCardFullMutation } from '@/domain/graphql';
import { transformToCards } from './helpers';
import { ToastyErrorGraph } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const { useStepper, steps } = defineStepper(
  {
    id: '1',
    title: 'Contenido',
    description: 'Enter your shipping details',
  },
  {
    id: '2',
    title: 'Estilo del QR',
    description: 'Enter your payment details',
  },
  { id: '3', title: 'Proceso completado', description: 'Checkout complete' }
);

interface Props {
  defaultData?: VCardSchemaType;
}

export const BuildVCStepForm = ({ defaultData }: Props) => {
  const stepper = useStepper();

  return (
    <div className="space-y-6 py-6 rounded-lg h-full flex flex-col">
      <div className="flex justify-between">
        <h2 className="text-lg font-medium">Crear VCard</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Paso {stepper.current.index + 1} de {steps.length}
          </span>
          <div />
        </div>
      </div>
      <nav aria-label="Checkout Steps" className="group my-4">
        <ol className="flex items-start justify-between gap-2" aria-orientation="horizontal">
          {stepper.all.map((step, index, array) => (
            <React.Fragment key={step.id}>
              <li className="flex flex-1 flex-col items-center gap-4 flex-shrink-0">
                <Button
                  type="button"
                  role="tab"
                  variant={index <= stepper.current.index ? 'default' : 'secondary'}
                  aria-current={stepper.current.id === step.id ? 'step' : undefined}
                  aria-posinset={index + 1}
                  aria-setsize={steps.length}
                  aria-selected={stepper.current.id === step.id}
                  className="flex size-10 items-center justify-center rounded-full"
                  onClick={() => stepper.goTo(step.id)}>
                  {index + 1}
                </Button>
                <span className="text-sm font-medium text-center">{step.title}</span>
              </li>
              {index < array.length - 1 && (
                <Separator
                  className={`flex-1 my-auto mt-5 ${index < stepper.current.index ? 'bg-primary' : 'bg-muted'}`}
                />
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
      <div className="space-y-4 flex flex-col flex-1">
        <BasicFormProviderZod defaultValue={defaultData}>
          <div className="flex-1">
            {stepper.switch({
              1: () => <FirstStep />,
              2: () => <SecondStep />,
              3: () => <ThirdStep />,
            })}
          </div>
          <FooterButtons stepper={stepper as any} />
        </BasicFormProviderZod>
      </div>
    </div>
  );
};

const FooterButtons = ({ stepper }: { stepper: Stepper }) => {
  const { getValues } = useFormContext<IVCardData>();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [createCardMutation] = useCreateCardFullMutation();

  const mutation = useMutation({
    mutationFn: async (data: IVCardData) => {
      try {
        const dataToSend = transformToCards(data);
        const response = await createCardMutation({
          variables: {
            input: dataToSend,
          },
        });

        return response.data?.createCardFull;
      } catch (error) {
        ToastyErrorGraph(error as any);
      }
    },
  });

  const isFirtStep = stepper.current.id === '1';
  const isSecondStep = stepper.current.id === '2';

  const onNextStep = async () => {
    if (isFirtStep) {
      stepper.next();
    }

    if (isSecondStep) {
      const data = await mutation.mutateAsync(getValues());

      if (data) stepper.next();
    }

    if (stepper.isLast) {
      queryClient.invalidateQueries({ queryKey: ['cards'] });
      navigate('/vcards');
    }
  };

  const onHoverLastStep = () => {
    if (stepper.isLast) {
      queryClient.invalidateQueries({ queryKey: ['cards'] });
      
    }
  };

  const disableNextButtonSecondStep = isSecondStep ? mutation.isPending : false;

  return (
    <div className="flex justify-end gap-4 mt-5">
      {!stepper.isLast ? (
        <Button variant="secondary" onClick={stepper.prev} disabled={stepper.isFirst}>
          Anterior
        </Button>
      ) : null}
      {isFirtStep ? <PreviewModal /> : null}
      {isSecondStep ? <PreviewQRModal /> : null}

      <div onMouseLeave={onHoverLastStep} onMouseEnter={onHoverLastStep}>
        <Button disabled={disableNextButtonSecondStep} onClick={onNextStep}>
          {stepper.isLast ? 'Terminar' : 'Siguiente'}
        </Button>
      </div>
    </div>
  );
};
