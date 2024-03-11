import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
import Tailwind from "primereact/passthrough/tailwind";

import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const value = { unstyled: true, pt: Tailwind };

  return (
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider value={value}>
        <Component {...pageProps} />
      </PrimeReactProvider>
    </QueryClientProvider>
  );
}
