import { SidebarInset } from '@/components/ui/sidebar';
import { VCard } from '@/components/VCard';
import { colorThemes, type colorThemesKeys } from '@/features/vcBuilder/constants';
import { vcardDataMock } from '@/mockData';
import { useMemo } from 'react';

export const ViewVCardPage = () => {
  const data = vcardDataMock;

  // save a variable with the css style in line not tailwind rule to apply a gradient background by the theme color selected by the user
  const currentTheme = useMemo(() => colorThemes[(data?.themeColor as colorThemesKeys) || '1'], [data?.themeColor]);
  const bgStyle = { backgroundImage: `linear-gradient(${currentTheme.from}, ${currentTheme.to})` };

  // background-image: linear-gradient(rgb(0, 9, 87), rgb(52, 76, 183));
  return (
    <SidebarInset style={{ ...bgStyle }}>
      <div className="w-full max-w-[700px] mx-auto border-x border-white">
        <VCard data={data as any} />
      </div>
    </SidebarInset>
  );
};
