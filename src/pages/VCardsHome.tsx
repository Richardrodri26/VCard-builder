import { GradientHeading } from '@/components/GradientHeader';
import { Button } from '@/components/ui/button';
import { Cards, useCardsLazyQuery } from '@/domain/graphql';
import { VCList, VCListSkeleton } from '@/features/vcList';
import { useQuery } from '@tanstack/react-query';
import { PlusIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const VCardsHome = () => {
  const [getCardsQuery] = useCardsLazyQuery({
    fetchPolicy: 'no-cache'
  });

  const { data, isLoading } = useQuery({
    queryKey: ['cards'],
    queryFn: async () => {
      const data = await getCardsQuery();

      return (data?.data?.Cards as Cards[]) || [];
    },
    // cached for 1 minutes
    staleTime: (1 * 60) * 1000,
    refetchOnMount: true,
  });

  const navigate = useNavigate();

  const goToBuilderVCard = () => {
    navigate('/vcards/new');
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-2 justify-between w-full">
        <GradientHeading variant="default" size="lg" weight="bold">
          Tus VCards
        </GradientHeading>

        <Button onClick={goToBuilderVCard} effect="expandIcon" icon={PlusIcon} iconPlacement="left">
          <span>Nuevo VCard</span>
        </Button>
      </div>

      <div>
        {isLoading ? <VCListSkeleton /> : <VCList items={data || []} />}
        
      </div>
    </div>
  );
};


