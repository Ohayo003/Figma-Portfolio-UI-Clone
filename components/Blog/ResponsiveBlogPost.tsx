import { Box, Divider, Flex, HStack } from "@chakra-ui/react";
import React from "react";

interface IResponsiveBlogPost {
  title: string;
  date: string;
  content: string;
  category: string;
}

const ResponsiveBlogPost = ({
  title,
  date,
  content,
  category,
}: IResponsiveBlogPost) => {
  return (
    <Flex flexDirection="column">
      <Box
        fontFamily=" Heebo"
        fontStyle=" normal"
        fontWeight=" 500"
        width="312px"
        fontSize=" 26px"
        lineHeight=" 38.19px"
        color="text.dark"
      >
        {title}
      </Box>
      <HStack gap={3}>
        <Box
          fontFamily=" Heebo"
          fontStyle=" normal"
          fontWeight=" 400"
          fontSize=" 16px"
          lineHeight=" 23.5px"
          color="text.dark"
        >
          {date}
        </Box>
        <Box fontSize=" 20px">
          <Divider orientation="vertical" />
        </Box>
        <Box
          fontFamily=" Heebo"
          fontStyle=" normal"
          fontWeight="400"
          fontSize=" 16px"
          lineHeight=" 23.5px"
          color="text.light"
        >
          {category}
        </Box>
      </HStack>
      <Box
        fontFamily=" Heebo"
        fontStyle=" normal"
        fontWeight=" normal"
        fontSize=" 16px"
        lineHeight=" 23.5px"
        width="339px"
        color="text.dark"
      >
        {content}
      </Box>
      <Box mt={5} mb={5}>
        <Divider orientation="horizontal" />
      </Box>
    </Flex>
  );
};

export default ResponsiveBlogPost;
