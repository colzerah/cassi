import { ReactNode } from "react";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ColorModeScript } from "@chakra-ui/react";

import LightTheme from "@/themes/light";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ColorModeScript initialColorMode={LightTheme.config.initialColorMode} />
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
