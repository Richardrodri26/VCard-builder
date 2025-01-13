import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const VCListItem = () => {
  const navigate = useNavigate();

  const goToViewVCard = () => {
    navigate('/vcard/1')
  }

  return (
    <Card className='flex-1'>
      <CardHeader>
        <CardTitle>Titulo</CardTitle>
        <CardDescription>Descripción</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={goToViewVCard} variant="outline">
          <Search />
          <span>Ver</span>
        </Button>
      </CardContent>
    </Card>
  );
};
