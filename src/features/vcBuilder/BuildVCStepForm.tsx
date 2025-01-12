import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { defineStepper } from '@stepperize/react';
import React from 'react';
import { PreviewModal } from './modals/PreviewModal';
import { BasicFormProviderZod } from '@/components/Form';
import { FirstStep } from './forms/FirstStep';

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

export const BuildVCStepForm = () => {
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
        <BasicFormProviderZod>
          <div className="flex-1">
            {stepper.switch({
              1: () => <FirstStep />,
              2: () => <>2</>,
              3: () => <>3</>,
            })}
          </div>
          {!stepper.isLast ? (
            <div className="flex justify-end gap-4 mt-5">
              <Button variant="secondary" onClick={stepper.prev} disabled={stepper.isFirst}>
                Anterior
              </Button>
              <PreviewModal />

              <Button onClick={stepper.next}>{stepper.isLast ? 'Completar' : 'Siguiente'}</Button>
            </div>
          ) : (
            <Button onClick={stepper.reset}>Reset</Button>
          )}
        </BasicFormProviderZod>
      </div>
    </div>
  );
};
