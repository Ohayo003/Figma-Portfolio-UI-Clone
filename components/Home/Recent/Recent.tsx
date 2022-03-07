import { Box, Flex, HStack, VStack, Divider } from "@chakra-ui/react";
import React from "react";

type RecentType = {
  title: string;
  date: string;
  content: string;
  category: string;
};

const Recent = ({ title, date, content, category }: RecentType) => {
  return (
    <VStack justify="start">
      <Box
        width="418px"
        height=" 295px"
        boxShadow=" 0px 4px 10px rgba(187, 225, 250, 0.25)"
        borderRadius="4px"
        background="container.default"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="10px 10px"
      >
        <Box
          fontFamily=" Heebo"
          fontStyle=" normal"
          fontWeight=" bold"
          width="374px"
          fontSize=" 26px"
          lineHeight=" 38px"
          color="text.default"
        >
          {title}
        </Box>
        <HStack gap={5} justify="start" width="inherit" pl={5}>
          <Box
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" normal"
            fontSize=" 18px"
            p="10px 0px"
            lineHeight=" 26px"
            color="text.default"
          >
            {date}
          </Box>
          <Box
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" normal"
            fontSize=" 18px"
            p="10px 0px"
            lineHeight=" 26px"
            color="text.dark"
          >
            <Divider
              orientation="vertical"
              h={5}
              w={0.4}
              background="#000000"
            />
          </Box>
          <Box
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" normal"
            fontSize=" 18px"
            p="10px 0px"
            lineHeight=" 26px"
            color="text.dark"
          >
            {category}
          </Box>
        </HStack>
        <Box
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="normal"
          fontSize="16px"
          line-height="24px"
          width="inherit"
          pl={5}
          pr={5}
        >
          {content}
        </Box>
      </Box>
    </VStack>
  );
};

export default Recent;
