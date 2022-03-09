import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layouts/Layout";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40rem",
  md: "52rem",
  lg: "64rem",
  xl: "80rem",
});

const customTheme = extendTheme({
  colors: {
    text: {
      dark: "#21243D",
      light: "#8695A4",
      white: "#FFFFFF",
      secondary: "#00A8CC",
    },
    divider: {
      dark: "#00000",
      light: "#E0E0E0",
    },
    container: {
      default: "#FFFFFF",
      light: "#EDF7FA",
      primary: "#FF6464",
    },
  },
  breakpoints,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
