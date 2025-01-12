import { AsideMenu } from '@/features/AsideMenu';
import { Outlet } from 'react-router-dom';
import { SidebarInset, SidebarTrigger } from '../ui/sidebar';

export const VCardLayout = () => {
  return (
    <div className="flex w-full">
      <AsideMenu />
      <SidebarInset>
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
        </div>
        <div className="px-4 h-[calc(100%-28px)] container mx-auto">
          <Outlet />
        </div>
      </SidebarInset>
    </div>
  );
};
