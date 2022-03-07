import { Box, Flex, Grid } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box width="100vw" height="100%" position="absolute">
      <Grid templateRows="20vh auto 20vh">
        <Header />
        {children}
        <Footer />
      </Grid>
    </Box>
  );
};

export default Layout;
