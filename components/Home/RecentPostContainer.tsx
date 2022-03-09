import { Box, Center, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Recent from "components/Blogs/BlogPost";
import "@fontsource/heebo";
import BlogPost from "../Blogs/BlogPost";

const RecentPost = () => {
  return (
    <Box
      mt={14}
      background="container.light"
      width={{ xl: "100%", base: "inherit" }}
      pr={{ xl: 36, base: 3 }}
      pl={{ xl: 36, base: 3 }}
      pb={8}
    >
      <Center>
        <HStack
          gap={{ lg: 96, base: 0 }}
          justify={{ base: "center", lg: "space-evenly" }}
        >
          <Box
            fontFamily=" Heebo"
            fontStyle=" normal"
            height="3.75rem"
            width={{ xl: "16rem", base: "6.563rem" }}
            fontWeight=" 400"
            fontSize={{ xl: "1.375rem", base: "1.125rem" }}
            lineHeight=" 60px"
            alignItems={{ xl: "flex-end", base: "center" }}
            // mr={{ xl: "32.438rem" }}
          >
            Recent Post
          </Box>
          <Box
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" 400"
            display={{ xl: "block", base: "none" }}
            fontSize=" 18px"
            width="13rem"
            lineHeight="3.75rem"
            textAlign="right"
            color="text.secondary"
          >
            View all
          </Box>
        </HStack>
      </Center>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justify="center"
        justifyContent="center"
        alignItems="center"
        gap={{ lg: 5, base: 4 }}
      >
        <Box
          width={{ lg: "26.125rem", base: "22.125rem" }}
          height={{ lg: " 18.438rem", base: "16.625rem" }}
          boxShadow=" 0px 4px 10px rgba(187, 225, 250, 0.25)"
          borderRadius="0.25rem"
          background="container.default"
          alignItems="center"
          p={{ base: 5, xl: 6 }}
        >
          <BlogPost
            isBlogPage={false}
            title={"Making a design system from scratch"}
            date={"12 Feb 2020"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            category={"Design, Pattern"}
          />
        </Box>
        <Box
          width={{ lg: "26.125rem", base: "22.125rem" }}
          height={{ lg: " 18.438rem", base: "16.625rem" }}
          boxShadow=" 0px 4px 10px rgba(187, 225, 250, 0.25)"
          borderRadius="4px"
          background="container.default"
          alignItems="center"
          p={{ base: 5, xl: 6 }}
        >
          <BlogPost
            isBlogPage={false}
            title={"Making a design system from scratch"}
            date={"12 Feb 2020"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            category={"Design, Pattern"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RecentPost;
