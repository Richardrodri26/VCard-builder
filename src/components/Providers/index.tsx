import { SidebarProvider } from '../ui/sidebar';
import { ConfirmDialogProvider } from './ConfirmDialogProvider';
import { TanstackQueryProvider } from './TanstackQueryProvider';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <TanstackQueryProvider>
      <ConfirmDialogProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </ConfirmDialogProvider>
    </TanstackQueryProvider>
  );
};
