import { Box, Flex, HStack, VStack, Divider } from "@chakra-ui/react";
import React from "react";

type RecentType = {
  title: string;
  date: string;
  content: string;
  category: string;
  isBlogPage: boolean;
};

const BlogPost = ({
  title,
  date,
  content,
  category,
  isBlogPage,
}: RecentType) => {
  return (
    <VStack alignItems="left" mt={["0 !important"]}>
      <Box
        fontFamily=" Heebo"
        fontStyle=" normal"
        fontWeight=" 700"
        height={
          isBlogPage ? { lg: "2.063rem" } : { lg: "5.313rem", base: "3.75rem" }
        }
        width={
          isBlogPage
            ? { lg: "42.625rem", base: "19.5rem" }
            : { lg: "23.375rem", base: "20.438rem" }
        }
        fontSize={{ lg: "1.875rem", base: "1.625rem" }}
        lineHeight={{ lg: "2.375rem", base: "1.875rem" }}
        color="text.default"
        mb={isBlogPage ? { lg: 4, base: 1.5 } : { lg: 3, base: 3 }}
      >
        {title}
      </Box>
      <HStack
        gap={5}
        width={{ lg: "23.375rem" }}
        justify="start"
        mt={["0 !important"]}
      >
        <Box
          fontFamily=" Heebo"
          fontStyle=" normal"
          fontWeight=" 400"
          fontSize={isBlogPage ? { lg: "1.25rem", base: "1rem" } : "1.125rem"}
          lineHeight={
            isBlogPage ? { base: "1.469rem", lg: "1.813rem" } : " 26px"
          }
          color="text.default"
        >
          {date}
        </Box>
        <Box>
          <Divider orientation="vertical" h={5} borderColor="divider.dark" />
        </Box>
        <Box
          fontFamily=" Heebo"
          fontStyle=" normal"
          fontWeight=" 400"
          fontSize={isBlogPage ? { lg: "1.25rem", base: "1rem" } : " 1.125rem"}
          lineHeight={
            isBlogPage ? { lg: "1.836rem", base: "1.438rem" } : " 26px"
          }
          color={isBlogPage ? "text.light" : "text.dark"}
          m={["0 !important"]}
        >
          {category}
        </Box>
      </HStack>
      <Box
        fontFamily="Heebo"
        fontStyle="normal"
        fontWeight="400"
        fontSize="16px"
        line-height="1.5rem"
        mt={isBlogPage ? { base: 4 } : { base: 5 }}
        width={
          isBlogPage
            ? { lg: "42.625rem", base: "21.188rem" }
            : { lg: "23rem", base: "19.625" }
        }
        height={isBlogPage ? { lg: "2.688rem" } : "7.313rem"}
      >
        {content}
      </Box>
    </VStack>
  );
};

export default BlogPost;
