import { Box, Flex, Grid } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box width="full" height="full" position="absolute">
      <Grid templateRows="3.125rem auto 11.375rem">
        <Header />
        {children}
        <Footer />
      </Grid>
    </Box>
  );
};

export default Layout;
