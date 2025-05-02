import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

import LightTheme from "../themes/light";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store} data-testid="redux-provider">
      <ChakraProvider theme={LightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}
