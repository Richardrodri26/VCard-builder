import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Cards } from '@/domain/graphql';
import { useQueryClient } from '@tanstack/react-query';
import { Pencil, Search, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: Cards
}

export const VCListItem = ({ data }: Props) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const goToViewVCard = () => {

    queryClient.setQueryData(['card', data.id], data)

    navigate(`/vcard/${data.id}`);
  };

  const goToEditVCard = () => {
    navigate(`/vcards/edit/${data.id}`);
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{data?.title}</CardTitle>
        <CardDescription>{data?.subTitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='w-full flex gap-2 items-center flex-wrap'>
        <Button onClick={goToViewVCard} variant="outline">
          <Search />
          <span>Ver</span>
        </Button>
        <Button onClick={goToEditVCard} variant="outline">
          <Pencil />
          <span>Editar</span>
        </Button>
        <Button variant="outline">
          <Trash />
          <span>Eliminar</span>
        </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const VCListItemSkeleton = () =>{
  return (
    <Skeleton className='h-[164px] w-[348px]' />
  )
}
