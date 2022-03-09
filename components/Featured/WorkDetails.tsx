import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

interface IWorkDetails {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  h1: string;
  h2: string;
  content: string;
  year: number;
  category: string;
  title: string;
}

const WorkDetails = ({
  image1,
  image2,
  image3,
  h1,
  h2,
  content,
  year,
  category,
  title,
}: IWorkDetails) => {
  return (
    <VStack>
      <HStack width={{ lg: "42.563rem", base: "21.188rem" }} align="start">
        <Box
          fontFamily=" Heebo"
          fontStyle=" normal"
          fontWeight=" 700"
          fontSize={{ base: "1.875rem", lg: "2.125rem" }}
          width={{ base: "21.188rem", lg: "31.625rem" }}
          lineHeight=" 50px"
          pb={{ lg: 8, base: 6 }}
        >
          <Box>{title}</Box>
        </Box>
      </HStack>
      <HStack
        pb={6}
        width={{ lg: "42.563rem", base: "21.188rem" }}
        align="start"
        m={["0 !important"]}
        gap={4}
      >
        <Box
          width="3.875rem"
          height="1.563rem"
          fontFamily=" Heebo"
          fontStyle="normal"
          fontWeight="900"
          fontSize="1.125rem"
          lineHeight=" 30px"
          color="text.white"
          background="#FF7C7C"
          borderRadius="16px"
          textAlign="center"
        >
          {year}
        </Box>
        <Box
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="400"
          fontSize={{ lg: "20px", base: "1.125rem" }}
          lineHeight="29px"
          color="text.dark"
          width={{ base: "16.375rem", lg: "23.375rem" }}
          m={["0 !important"]}
        >
          {category}
        </Box>
      </HStack>
      <Box
        width={{ lg: "42.563rem", base: "21.188rem" }}
        fontFamily="Heebo"
        fontStyle="normal"
        fontWeight="400"
        color="text.dark"
        fontSize="1rem"
        lineHeight="1.5rem"
        m={["0 !important"]}
        pb={{ lg: 12, base: 6 }}
      >
        {content}
      </Box>
      <Box
        width={{ base: "21.188rem", lg: "42.563rem" }}
        height={{ lg: "28.75rem", base: "16rem" }}
        zIndex={-1}
      >
        <Box>
          <Image src={image1} alt="dashboard" />
        </Box>
      </Box>
      <Box pt={{ lg: 14, base: 6 }} mt={["0 !important"]}>
        <Box
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="500"
          fontSize={{ lg: "1.875rem", base: "1.625rem" }}
          width={{ lg: "42.563rem", base: "21.188rem" }}
          height={{ lg: "2.813rem", base: "3.75rem" }}
          lineHeight="3.75rem"
        >
          <h1>{h1}</h1>
        </Box>
        <Box
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="500"
          height={{ lg: "5.125rem" }}
          fontSize="24px"
          width={{ lg: "42.563rem", base: "21.188rem" }}
          lineHeight="3.75rem"
        >
          {h2}
        </Box>
      </Box>
      <Box
        width={{ lg: "42.563rem", base: "21.188rem" }}
        fontFamily="Heebo"
        fontStyle="normal"
        fontWeight="400"
        fontSize="1rem"
        color="text.dark"
        m={["0 !important"]}
        lineHeight="24px"
        pb={{ lg: 7, base: 6 }}
      >
        {content}
      </Box>
      <Box
        width={{ base: "21.188rem", lg: "42.563rem" }}
        height={{ lg: "28.75rem" }}
      >
        <Image src={image2} alt="red car" />
      </Box>
      <Box
        width={{ base: "21.188rem", lg: "42.563rem" }}
        height={{ lg: "28.75rem", base: "16rem" }}
        pt={{ lg: 7, base: 6 }}
      >
        <Box>
          <Image src={image3} alt="order receipt" />
        </Box>
      </Box>
    </VStack>
  );
};

export default WorkDetails;
