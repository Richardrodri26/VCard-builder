import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

export const VCListItem = () => {
  
  return (
    <Card className='flex-1'>
      <CardHeader>
        <CardTitle>Titulo</CardTitle>
        <CardDescription>Descripción</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline">
          <Search />
          <span>Ver</span>
        </Button>
      </CardContent>
    </Card>
  );
};
