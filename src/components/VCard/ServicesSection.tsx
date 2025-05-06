import { BadgeInfo, ClipboardList, DollarSign } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { IServicesData, IThemeColors } from '@/interfaces/VCard.interface';

interface ServiceCardProps {
  data: IServicesData;
  theme: IThemeColors
}

export const ServicesSection = ({ data: { serviceDescription, serviceName, servicePrice }, theme }: ServiceCardProps) => {
  const principalColor = theme.from;
  return (
    <Card className="bg-white rounded-2xl shadow-md p-4 min-w-[280px] min-h-[138px] h-full w-fit">
      <CardContent className="space-y-4 pb-0">
        <div className="flex items-center gap-2 text-blue-600">
          <ClipboardList className='min-w-4 min-h-4' stroke={principalColor} />
          <span className="font-semibold text-gray-800 flex-1">{serviceName}</span>
        </div>

        <div className="flex items-center gap-2 text-blue-600">
          <BadgeInfo className='min-w-4 min-h-4' stroke={principalColor} />
          <p className="text-gray-700 flex-1">{serviceDescription}</p>
        </div>

        <div className="flex items-center gap-2 text-blue-600">
          <DollarSign className='min-w-4 min-h-4' stroke={principalColor} />
          <span className="text-gray-800 flex-1">{servicePrice}</span>
        </div>
      </CardContent>
    </Card>
  );
};
