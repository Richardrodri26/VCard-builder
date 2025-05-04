import { IProductsData, IThemeColors } from '@/interfaces/VCard.interface';
import { Card, CardContent } from '../ui/card';
import { BadgeInfo, ClipboardList, DollarSign } from 'lucide-react';

interface IProductsSectionsProps {
  data: IProductsData;
  theme: IThemeColors;
}

export const ProductsSections = ({
  data: { productDescription, productName, productPrice },
  theme,
}: IProductsSectionsProps) => {
  const secondaryColor = theme.to;

  return (
    <Card className="bg-white rounded-2xl shadow-md p-4 min-w-[280px] w-fit">
      <CardContent className="space-y-4 pb-0">
        <div className="flex items-center gap-2 text-green-600">
          <ClipboardList className='min-w-4 min-h-4' stroke={secondaryColor} />
          <span className="font-semibold text-gray-800 flex-1">{productName}</span>
        </div>

        <div className="flex items-center gap-2 text-green-600">
          <BadgeInfo className='min-w-4 min-h-4' stroke={secondaryColor} />
          <p className="text-gray-700 flex-1">{productDescription}</p>
        </div>

        <div className="flex items-center gap-2 text-green-600">
          <DollarSign className='min-w-4 min-h-4' stroke={secondaryColor} />
          <span className="text-gray-800 flex-1">{productPrice}</span>
        </div>
      </CardContent>
    </Card>
  );
};
