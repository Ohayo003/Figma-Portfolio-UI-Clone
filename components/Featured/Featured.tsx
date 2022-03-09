import { Box, Divider, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import "@fontsource/heebo";

interface IFeatureData {
  image: StaticImageData;
  title: string;
  date: number;
  category: string;
  content: string;
  isWorkPage: boolean;
}

const FeaturedData = ({
  image,
  title,
  date,
  category,
  content,
  isWorkPage,
}: IFeatureData) => {
  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center" }}
        justify={{ base: "center" }}
        justifyContent={{ base: "center" }}
        gap={4}
      >
        <Box
          width={{ base: "21.188rem", lg: "15.375rem" }}
          height={{ base: "15.375rem", lg: "11.25rem" }}
          borderRadius="6px"
          zIndex={-1}
        >
          <Box>
            <Image src={image} alt="image" layout="responsive" />
          </Box>
        </Box>
        <VStack alignItems="start" gap={{ lg: 5, base: 4 }}>
          <Box
            fontFamily="Heebo"
            fontStyle="normal"
            fontWeight="700"
            fontSize={{ base: "1.5rem", lg: "1.875rem" }}
            lineHeight={{ base: "1.875rem", lg: "2.75rem" }}
            color="text.default"
          >
            {title}
          </Box>
          <HStack gap={4} mt={["0 !important"]}>
            <Box
              width="3.875rem"
              height="1.563rem"
              background=" #142850"
              borderRadius="1rem"
              fontWeight="900"
              textAlign="center"
              fontSize={{ lg: "1.125rem", base: "1rem" }}
              color="text.white"
            >
              {date}
            </Box>
            <Box
              fontFamily=" Heebo"
              fontStyle=" normal"
              fontWeight=" 400"
              fontSize={{ lg: "1.25rem", base: "1rem" }}
              lineHeight=" 29px"
              color="text.light"
              m={["0 !important"]}
            >
              {category}
            </Box>
          </HStack>
          <Box
            fontFamily="Heebo"
            fontStyle=" normal"
            fontWeight=" 400 "
            width={
              isWorkPage
                ? { base: "20.875rem", lg: "26.125rem" }
                : { base: "20.875rem", lg: "37.125rem" }
            }
            fontSize="md"
            lineHeight="1.469rem"
            color="text.dark"
            mt={["0 !important"]}
          >
            {content}
          </Box>
        </VStack>
      </Flex>
      <Box mt={8} mb={8}>
        <Divider orientation="horizontal" borderColor="#E0E0E0" />
      </Box>
    </Flex>
  );
};

export default FeaturedData;
