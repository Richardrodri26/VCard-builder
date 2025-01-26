import confetti from 'canvas-confetti';
import { PreviewVCardForm } from '../../PreviewVCardForm';
import { useEffect } from 'react';

export const ThirdStep = () => {

  useEffect(() => {
    const makeConfetti = () => {
      const end = Date.now() + 1 * 1000; // 1 seconds
      const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

      const frame = () => {
        if (Date.now() > end) return;

        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          startVelocity: 60,
          origin: { x: 0, y: 0.5 },
          colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          startVelocity: 60,
          origin: { x: 1, y: 0.5 },
          colors,
        });

        requestAnimationFrame(frame);
      };

      frame();
    };
    makeConfetti();

  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Listo ha terminado su creación de VCard</h2>
      <p className="text-muted-foreground">
        Puede revisar su VCard y agregar más contenido en la sección de mis VCards.
      </p>
      <div className="w-full flex justify-center items-center">
        <PreviewVCardForm />
      </div>
    </div>
  );
};
