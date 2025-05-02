import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import LightTheme from "../themes/light";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={LightTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
