import { WagmiProvider } from "wagmi";
import { wagmiAdapter } from "./config/reown";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
