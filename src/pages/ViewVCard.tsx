import { SidebarInset } from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';
import { Spinner } from '@/components/ui/spinner';
import { VCard } from '@/components/VCard';
import { Cards, useCardLazyQuery } from '@/domain/graphql';
import { colorThemes } from '@/features/vcBuilder/constants';
import { transformVCardData } from '@/features/vcBuilder/helpers';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const ViewVCardPage = () => {
  const { id } = useParams();

  const [getCardQuery] = useCardLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const { data, isLoading } = useQuery({
    queryKey: ['card', id],
    queryFn: async () => {
      const data = await getCardQuery({
        variables: {
          cardId: id!,
        },
      });

      return data?.data?.Card as Cards | undefined;
    },
    enabled: Boolean(id),
  });

  // const dataCard = vcardDataMock;

  // background-image: linear-gradient(rgb(0, 9, 87), rgb(52, 76, 183));

  if (!data && isLoading)
    return (
      <SidebarInset>
        <div className="w-full max-w-[700px] mx-auto border-x border-white">
          <Skeleton className="h-screen w-full flex justify-center items-center">
            <Spinner size="lg" className="bg-black dark:bg-white size-16" />
          </Skeleton>
        </div>
      </SidebarInset>
    );
  const dataCard = transformVCardData(data!);

  // save a variable with the css style in line not tailwind rule to apply a gradient background by the theme color selected by the user
  //  const currentTheme = colorThemes[(dataCard?.themeColor as colorThemesKeys) || '1'];
  const currentTheme = dataCard?.themeColor || colorThemes['1'];
  const bgStyle = { backgroundImage: `linear-gradient(${currentTheme.from}, ${currentTheme.to})` };

  return (
    <SidebarInset style={{ ...bgStyle }}>
      <div className="w-full max-w-[700px] mx-auto border-x border-white">
        <VCard data={dataCard} />
      </div>
    </SidebarInset>
  );
};
