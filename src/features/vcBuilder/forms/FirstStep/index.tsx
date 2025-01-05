import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import Iphone15Pro from '@/components/ui/iphone-15-pro';
import { VCard } from '@/components/VCard';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Bell, LifeBuoy, Link2, LucideProps, Plus, ShieldCheck } from 'lucide-react';
import { SelectThemeColor } from './SelectThemeColor';
import { useFormContext } from 'react-hook-form';
import { IVCardData } from '@/interfaces/VCard.interface';
import { PersonalInfoForm } from './PersonalInfoForm';
import { PreviewVCardForm } from '../../PreviewVCardForm';
import { ContactInformationForm } from './ContactInformationForm';
import { AddressInformationForm } from './AddressInformationForm';
import { CompanyInformationForm } from './CompanyInformationForm';
import { SocialLinksInformationForm } from './SocialLinksInformationForm';

const items: {
  id: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  sub: string;
  content: React.ReactNode;
}[] = [
  {
    id: '1',
    icon: Link2,
    title: 'Diseño',
    sub: 'Elija un tema cromático para su página.',
    content: <SelectThemeColor />,
  },
  {
    id: '2',
    icon: Bell,
    title: 'Información personal',
    sub: 'Introduzca su información.',
    content: <PersonalInfoForm />
  },
  {
    id: '3',
    icon: ShieldCheck,
    title: 'Información de contacto',
    sub: 'Introduzca la información de contacto que desea mostrar en su vCard.',
    content: <ContactInformationForm />
  },
  {
    id: '4',
    icon: LifeBuoy,
    title: 'Ubicación',
    sub: 'Proporcione su dirección e información de ubicación.',
    content: <AddressInformationForm />
  },
  {
    id: '5',
    icon: LifeBuoy,
    title: 'Detalles de la compañía',
    sub: 'Añada más información sobre el negocio al que pertenece.',
    content: <CompanyInformationForm />
  },
  {
    id: '6',
    icon: LifeBuoy,
    title: 'Redes sociales',
    sub: 'Añada enlaces de redes sociales a su página.',
    content: <SocialLinksInformationForm />
  },
];

export function FirstStep() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Agregue contenido para su VCard</h2>
      <div className="flex gap-4 items-start justify-between w-full">
        <Accordion type="multiple" className="flex-1 lg:flex-[0.6]">
          {items.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="py-2">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                  <span className="flex items-center gap-3">
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border"
                      aria-hidden="true">
                      <item.icon size={16} strokeWidth={2} className="opacity-60" />
                    </span>
                    <span className="flex flex-col space-y-1">
                      <span>{item.title}</span>
                      {item.sub && <span className="text-sm font-normal">{item.sub}</span>}
                    </span>
                  </span>
                  <Plus
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 opacity-60 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="ms-3 pb-2 ps-10 text-muted-foreground">{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="hidden flex-[0.4] lg:flex flex-col justify-center items-start">
          <PreviewVCardForm />
        </div>
      </div>
    </div>
  );
}
