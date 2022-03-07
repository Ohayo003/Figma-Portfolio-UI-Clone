import { Box, Divider, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import "@fontsource/heebo";

interface IFeatureData {
  image: StaticImageData;
  title: string;
  date: number;
  category: string;
  content: string;
}

const FeaturedData = ({
  image,
  title,
  date,
  category,
  content,
}: IFeatureData) => {
  return (
    <Flex flexDirection="row" gap={5}>
      <Box width=" 246px" height=" 180px" borderRadius="6px" zIndex={-1}>
        <Image src={image} alt="designing dashboard" />
      </Box>
      <Flex flexDirection="column" gap={2}>
        <Box
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="bold"
          fontSize="30px"
          lineHeight="44px"
          color="text.default"
        >
          {title}
        </Box>
        <HStack gap={5}>
          <Box
            width=" 62px"
            height=" 25px"
            background=" #142850"
            borderRadius=" 16px"
            fontWeight="900"
            textAlign="center"
            color="text.white"
          >
            {date}
          </Box>
          <Box
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" normal"
            fontSize=" 20px"
            lineHeight=" 29px"
            color="text.light"
          >
            {category}
          </Box>
        </HStack>
        <Box
          fontFamily="Heebo"
          fontStyle=" normal"
          fontWeight=" normal"
          width="594px"
          fontSize=" 16px"
          lineHeight=" 24px"
          color="text.dark"
        >
          {content}
        </Box>
      </Flex>
    </Flex>
  );
};

export default FeaturedData;
