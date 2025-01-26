import { SidebarProvider } from '../ui/sidebar';
import { Toaster } from '../ui/sonner';
import { ProviderApollo } from './ApolloProvider';
import { ConfirmDialogProvider } from './ConfirmDialogProvider';
import { TanstackQueryProvider } from './TanstackQueryProvider';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <TanstackQueryProvider>
      <ProviderApollo>
        <ConfirmDialogProvider>
          <SidebarProvider>{children}</SidebarProvider>
          <Toaster richColors />
        </ConfirmDialogProvider>
      </ProviderApollo>
    </TanstackQueryProvider>
  );
};
