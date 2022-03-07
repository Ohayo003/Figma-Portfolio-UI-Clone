import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

interface IResponsiveFeaturedData {
  image: StaticImageData;
  title: string;
  date: number;
  category: string;
  content: string;
}

 const ResponsiveFeaturedData = ({
  image,
  title,
  date,
  category,
  content,
}: IResponsiveFeaturedData) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justify="center"
      justifyContent="center"
      gap="2.5rem"
    >
      <Box width=" 339px" height=" 230px" borderRadius="6px">
        <Image src={image} alt="designing dashboard" layout="responsive" />
      </Box>
      <Flex flexDirection="column" gap={2}>
        <Box
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="700"
          fontSize="24px"
          lineHeight="30px"
          color="text.dark"
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
            fontSize="16px"
            textAlign="center"
            color="text.white"
          >
            {date}
          </Box>
          <Box
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" 400"
            fontSize=" 16px"
            lineHeight=" 29px"
            color="text.light"
          >
            {category}
          </Box>
        </HStack>
        <Box
          fontFamily="Heebo"
          fontStyle=" normal"
          fontWeight=" 400"
          width="344px"
          height="96px"
          fontSize=" 16px"
          lineHeight=" 23.5px"
          color="text.dark"
        >
          {content}
        </Box>
      </Flex>
    </Flex>
  );
};
export default ResponsiveFeaturedData;