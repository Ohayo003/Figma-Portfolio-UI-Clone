import { Box, Divider, Flex, HStack } from "@chakra-ui/react";
import React from "react";

interface IBlogPost {
  title: string;
  date: string;
  content: string;
  category: string;
}

const BlogPosts = ({ title, date, content, category }: IBlogPost) => {
  return (
    <Box>
      <Flex flexDirection="column">
        <Box
          fontFamily=" Heebo"
          fontStyle=" normal"
          fontWeight=" 500"
          fontSize=" 30px"
          lineHeight=" 44px"
          color="text.dark"
        >
          {title}
        </Box>
        <HStack gap={3}>
          <Box
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" normal"
            fontSize=" 20px"
            lineHeight=" 29px"
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
            fontWeight="normal"
            fontSize=" 20px"
            lineHeight=" 29px"
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
          lineHeight=" 24px"
          width="682px"
          color="text.dark"
        >
          {content}
        </Box>
        <Box mt={5} mb={5}>
          <Divider orientation="horizontal" />
        </Box>
      </Flex>
    </Box>
  );
};

export default BlogPosts;
