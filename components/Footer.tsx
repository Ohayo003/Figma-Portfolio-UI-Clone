import { Box, Flex, Icon } from "@chakra-ui/react";
import "@fontsource/heebo";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => (
  <Flex
    flexDirection="column"
    justify="center"
    justifyContent="center"
    alignItems="center"
    gap={5}
  >
    <Flex flexDirection="row" gap={5} justify="center">
      <Icon as={FaFacebookSquare} w={30} h={30} />
      <Icon as={FaInstagram} w={30} h={30} />
      <Icon as={FaTwitter} w={30} h={30} />
      <Icon as={FaLinkedin} w={30} h={30} />
    </Flex>
    <Box
      fontFamily="Heebo"
      fontStyle="normal"
      fontWeight="normal"
      fontSize="14px"
      lineHeight="21px"
    >
      Copyright ©2020 All rights reserved
    </Box>
  </Flex>
);

export default Footer;
