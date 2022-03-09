import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

interface IProfile {
  image: StaticImageData;
  name: string;
  content: string;
}

const Profile = ({ image, name, content }: IProfile) => {
  return (
    <Flex
      justify="center"
      //   gap="110px"
      alignItems="center"
      display={{
        base: "flex",
      }}
      flexDirection={{
        lg: "row",
        base: "column-reverse",
      }}
      gap={{ base: 10, lg: 28 }}
    >
      <VStack
        align={{ base: "center", lg: "start" }}
        gap={{ base: 5, lg: 9 }}
        zIndex={-1}
      >
        <Box
          width={{ base: "19.5rem", lg: "31.625rem" }}
          height={{ base: "7.5rem", lg: "6.563rem" }}
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight={{ base: "700", lg: "bold" }}
          fontSize={{ base: "2.5rem", lg: "2.75rem" }}
          lineHeight={{ base: "2.5rem", lg: "3.75rem" }}
          color="text.dark"
          textAlign={{ base: "center", lg: "left" }}
        >
          <Box>{name}</Box>
        </Box>
        <Box
          width={{ base: "20.5rem", lg: "31.063rem" }}
          height={{ base: "6rem", lg: "4.125rem" }}
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="400"
          textAlign={{ base: "center", lg: "left" }}
          fontSize="1rem"
          lineHeight="1.469rem"
          color="text.dark"
        >
          <Box>{content}</Box>
        </Box>
        <Button
          width="13rem"
          height="2.938rem"
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="500"
          background="container.primary"
          fontSize="md"
          lineHeight="29px"
          p={5}
          color="text.white"
        >
          Download Resume
        </Button>
      </VStack>
      <Box
        width={{ base: "10.679rem", lg: "15.188rem" }}
        height={{ base: "10.679rem", lg: "15.188rem" }}
        zIndex={-1}
      >
        <Image src={image} alt="profile" layout="responsive" />
      </Box>
    </Flex>
  );
};

export default Profile;
