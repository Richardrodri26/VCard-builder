import { GradientHeading } from '@/components/GradientHeader';
import { Button } from '@/components/ui/button';
import { VCList } from '@/features/vcList';
import { PlusIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const VCardsHome = () => {

  const navigate = useNavigate();

  const goToBuilderVCard = () => {
    navigate('/vcards/new')
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className='flex items-center gap-2 justify-between w-full'>
      <GradientHeading variant="default" size="lg" weight="bold">
        Tus VCards
      </GradientHeading>

      <Button onClick={goToBuilderVCard} effect="expandIcon" icon={PlusIcon} iconPlacement="left">
        <span>Nuevo VCard</span>
      </Button>
      </div>

      <div>
      <VCList items={[1,2,3,4,5]} />
      </div>
    </div>
  );
};
