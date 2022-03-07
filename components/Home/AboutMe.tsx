import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import "@fontsource/heebo";
import Image from "next/image";
import profile from "public/images/profile_pic.png";

const AboutMe = () => {
  return (
    <Box justifyContent="center">
      {/**For Mobile View */}
      <Flex
        flexDirection="column-reverse"
        align="center"
        position="relative"
        display={["flex", "flex", "none", "none"]}
      >
        <VStack align="center" zIndex={-1}>
          <Box
            width="312px"
            fontFamily="Heebo"
            fontStyle="normal"
            fontWeight="bold"
            fontSize="32px"
            textAlign="center"
            lineHeight="40px"
            color="text.dark"
          >
            Hi, I am John, Creative Technologist
          </Box>
          <Box
            width="328px"
            height="96px"
            fontFamily="Heebo"
            fontStyle="normal"
            fontWeight="normal"
            textAlign="center"
            fontSize="16px"
            lineHeight="24px"
            color="text.dark"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Box>
          <Button
            width="208px"
            as="button"
            height="47px"
            fontFamily="Heebo"
            fontStyle="normal"
            fontWeight="500"
            background="container.primary"
            fontSize="16px"
            lineHeight="29px"
            color="text.white"
          >
            Download Resume
          </Button>
        </VStack>
        <Box width="243px" height="243px" zIndex={-1} mb="34px">
          <Image src={profile} alt="profile" layout="responsive" />
        </Box>
      </Flex>

      {/* // /**For Desktop View */}
      <Flex
        justify="center"
        gap="110px"
        display={["none", "none", "flex", "flex"]}
      >
        <VStack gap={5} align="start" zIndex={-1}>
          <Box
            width="506px"
            height="105px"
            fontFamily="Heebo"
            fontStyle="normal"
            fontWeight="bold"
            fontSize="44px"
            lineHeight="60px"
            color="text.dark"
          >
            Hi, I am John, Creative Technologist
          </Box>
          <Box
            width="497px"
            height="66px"
            fontFamily="Heebo"
            fontStyle="normal"
            fontWeight="normal"
            fontSize="16px"
            lineHeight="24px"
            color="text.dark"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Box>
          <Button
            width="167px"
            as="button"
            height="47px"
            fontFamily="Heebo"
            fontStyle="normal"
            fontWeight="500"
            background="container.primary"
            fontSize="16px"
            lineHeight="29px"
            p="0px 10px"
            color="text.white"
          >
            Download Resume
          </Button>
        </VStack>
        <Box width="243px" height="243px" zIndex={-1}>
          <Image src={profile} alt="profile" />
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutMe;
