import { ChevronRight, Earth, Mail, MapPin, PhoneIcon, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { IVCardData } from '@/interfaces/VCard.interface';
import { useMemo } from 'react';
import { colorThemes, socialLinkIcons } from '@/features/vcBuilder/constants';
import { ServicesSection } from './ServicesSection';
import { ProductsSections } from './ProductsSections';

interface Props {
  data: IVCardData;
}

export const VCard = ({ data }: Props) => {
  const currentTheme = useMemo(() => data.themeColor || colorThemes['1'], [data.themeColor]);

  const profileImageUrl = data?.profileImage?.[0]?.fileUrl
    ? import.meta.env.VITE_APP_GRAPH + data?.profileImage?.[0]?.fileUrl
    : undefined;

  const phoneData = data?.phoneData || [];
  const emailData = data?.emailData || [];
  const websiteData = data?.websiteData || [];
  const addressData = data?.addressData || [];

  // const companyData = data?.companyData;
  const socialLinksData = data?.socialLinks || [];

  const servicesData = data?.servicesData || [];
  const productsData = data?.productsData || [];

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, ${currentTheme.from}, ${currentTheme.to})`,
      }}
      className="flex flex-col items-center bg-gradient-to-b min-h-screen h-full">
      {/* content */}
      <div className="flex flex-col items-center justify-center mt-[85px] w-full max-w-[700px] px-[16px] pb-[25px] relative">
        {/* Avatar */}
        {/* {profileImageUrl ? (
          <Avatar className="size-[106px] rounded-full">
            <AvatarImage src={profileImageUrl} />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
        ) : null} */}
        <Avatar className="size-[150px] rounded-full border-2 border-white">
          <AvatarImage src={profileImageUrl || undefined} />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>

        {/* Name */}
        <div className="my-[32px] w-full break-all text-white text-center">
          <h1 className="text-2xl xs:text-2xl mb-[9px] font-bold duration-500 w-full break-words break-all">
            {data.name}
          </h1>
          <p className="text-lg text-balance w-full block">{data?.subTitle}</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          {phoneData.length > 0 ? (
            <Button variant={'secondary'} className="rounded-full size-[50px]">
              <PhoneIcon />
            </Button>
          ) : null}
          {emailData.length > 0 ? (
            <Button variant={'secondary'} className="rounded-full size-[50px]">
              <Mail />
            </Button>
          ) : null}
          {websiteData.length > 0 ? (
            <Button variant={'secondary'} className="rounded-full size-[50px]">
              <Earth />
            </Button>
          ) : null}
        </div>
      </div>

      {/* Mid Content */}
      <div className="w-full bg-white h-full flex flex-col">
        <p className="text-base text-[#767C83] text-center mt-12 text-balance">{data?.description}</p>

        <div className="py-[20px] px-[12px] gap-2 rounded-[4px] flex flex-col items-start justify-center w-full shadow-[1px_6px_30px_rgba(0,31,14,0.05)] mt-6">
          {/* Item */}

          {phoneData.map((item, index) => (
            <div
              key={index}
              className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80">
              <div className="bg-[#F9F9F9] p-[11px] rounded-full min-w-10 min-h-10 [&>svg]:size-5">
                <PhoneIcon />
              </div>
              <div className="flex flex-col justify-center text-left w-full truncate rtl:text-right">
                <p className="text-base text-[#767C83] rtl:mr-2 rtl:text-right">{item?.title}</p>
                <p className="text-sm text-black font-medium truncate rtl:mr-2 rtl:text-right">{item.phoneNumber}</p>
              </div>
            </div>
          ))}

          {addressData.map((item, index) => (
            <div
              key={index}
              className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80">
              <div className="bg-[#F9F9F9] p-[11px] rounded-full min-w-10 min-h-10 [&>svg]:size-5">
                <MapPin />
              </div>
              <div className="flex flex-col justify-center text-left w-full truncate rtl:text-right">
                <p className="text-base text-[#767C83] rtl:mr-2 rtl:text-right">
                  {item?.city}, {item?.country}
                </p>
                <p className="text-sm text-black font-medium truncate rtl:mr-2 rtl:text-right">{item.streetAddress}</p>
              </div>
            </div>
          ))}

          {emailData.map((item, index) => (
            <div
              key={index}
              className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80">
              <div className="bg-[#F9F9F9] p-[11px] rounded-full min-w-10 min-h-10 [&>svg]:size-5">
                <Mail />
              </div>
              <div className="flex flex-col justify-center text-left w-full truncate rtl:text-right">
                <p className="text-base text-[#767C83] rtl:mr-2 rtl:text-right">{item?.title}</p>
                <p className="text-sm text-black font-medium truncate rtl:mr-2 rtl:text-right">{item.email}</p>
              </div>
            </div>
          ))}

          {websiteData.map((item, index) => (
            <div
              onClick={() => window.open(item.websiteUrl, '_blank')}
              key={index}
              className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80">
              <div className="bg-[#F9F9F9] p-[11px] rounded-full min-w-10 min-h-10 [&>svg]:size-5">
                <Earth />
              </div>
              <div className="flex flex-col justify-center text-left w-full truncate rtl:text-right">
                <p className="text-base text-[#767C83] rtl:mr-2 rtl:text-right">{item?.title}</p>
                <p className="text-sm text-black font-medium truncate rtl:mr-2 rtl:text-right">{item.websiteUrl}</p>
              </div>
            </div>
          ))}

          {/* {companyData ? (
            <>
              <Separator />
              <div className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80">
                <div className="bg-[#F9F9F9] p-[11px] rounded-full min-w-10 min-h-10 [&>svg]:size-5">
                  <Briefcase />
                </div>
                <div className="flex flex-col justify-center text-left w-full truncate rtl:text-right">
                  <p className="text-base text-[#767C83] rtl:mr-2 rtl:text-right">{companyData.companyName}</p>
                  <p className="text-sm text-black font-medium truncate rtl:mr-2 rtl:text-right">{companyData.job}</p>
                </div>
              </div>
            </>
          ) : null} */}
        </div>

        {/* Redes sociales */}
        {socialLinksData.length > 0 ? (
          <div className="my-[20px] w-full flex flex-col bg-white items-start justify-center px-4">
            <p className="font-medium text-lg text-[#131D29]">Encuentrame en</p>

            {/* Item */}
            {socialLinksData.map((item, index) => (
              <div
                onClick={() => window.open(item.socialLink, '_blank')}
                key={index}
                className="flex flex-row justify-between items-center p-[10px] rounded-[4px] bg-white w-full">
                <div className="space-x-[8px] sm:space-x-[20px] flex flex-row items-center">
                  {socialLinkIcons[item.icon]}
                  <div className="flex flex-col justify-center text-left">
                    {/* <p className="text-base sm:text-xl text-[#131D29] font-medium break-words rtl:text-base rtl:leading-4 rtl:text-right">
                      {item.title}
                    </p> */}
                    <p className="text-sm text-[#767C83] rtl:text-right break-all">{item.subTitle}</p>
                  </div>
                </div>

                <ChevronRight className="size-[24px] ml-2" />
              </div>
            ))}
          </div>
        ) : null}

        {/* Servicios */}

        {servicesData.length > 0 ? (
          <div className="my-2 px-4">
            <p className="font-medium text-lg text-[#131D29] mb-1">Servicios</p>
            <div className="flex items-center snap-mandatory gap-4 max-w-full overflow-x-auto pb-2">
              {servicesData.map((item, index) => (
                <ServicesSection theme={currentTheme} data={item} key={index} />
              ))}
            </div>
          </div>
        ) : null}

        {/* Productos */}

        {productsData.length > 0 ? (
          <div className="mb-8 px-4">
            <p className="font-medium text-lg text-[#131D29] mb-1">Productos</p>
            <div className="flex items-center snap-mandatory gap-4 max-w-full overflow-x-auto pb-2">
              {productsData.map((item, index) => (
                <ProductsSections theme={currentTheme} data={item} key={index} />
              ))}
            </div>
          </div>
        ) : null}

        {/* Footer */}
        <div className="w-full px-4 pb-[30px] flex flex-1 items-end">
          <Button style={{ backgroundColor: currentTheme.from }} className="w-full">
            <User />
            Agregar contacto
          </Button>
        </div>
      </div>
    </div>
  );
};
