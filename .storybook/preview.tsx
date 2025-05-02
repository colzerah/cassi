import React from "react";
import LightTheme from "../src/themes/light";

import { ChakraProvider } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider theme={LightTheme}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
