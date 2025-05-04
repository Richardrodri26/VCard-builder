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
    <Card className="bg-white rounded-2xl shadow-md p-4">
      <CardContent className="space-y-4 pb-0">
        <div className="flex items-center gap-2 text-blue-600">
          <ClipboardList stroke={principalColor} />
          <span className="font-semibold text-gray-800">{serviceName}</span>
        </div>

        <div className="flex items-center gap-2 text-blue-600">
          <BadgeInfo stroke={principalColor} />
          <p className="text-gray-700">{serviceDescription}</p>
        </div>

        <div className="flex items-center gap-2 text-blue-600">
          <DollarSign stroke={principalColor} />
          <span className="text-gray-800">{servicePrice}</span>
        </div>
      </CardContent>
    </Card>
  );
};
