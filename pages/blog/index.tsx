import { Box, Center, Flex } from "@chakra-ui/react";
import BlogPosts from "components/Blog/BlogPosts";
import React from "react";
import "@fontsource/heebo";
import ResponsiveBlogPost from "components/Blog/ResponsiveBlogPost";

const index = () => {
  return (
    <>
      <Flex
        justify="center"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={-10}
        display={["flex", "none", "none", "none"]}
      >
        <Box
          fontFamily=" Heebo"
          fontStyle=" normal"
          fontWeight=" 700"
          fontSize=" 30px"
          width="320px"
          ml={-5}
          lineHeight=" 60px"
          color="text.dark"
          textAlign="left"
        >
          Blogs
        </Box>
        <ResponsiveBlogPost
          title={"UI Interactions of the week"}
          date={"12 Feb 2019"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          category={"Express, Handlebars"}
        />
        <ResponsiveBlogPost
          title={"UI Interactions of the week"}
          date={"12 Feb 2019"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          category={"Express, Handlebars"}
        />
        <ResponsiveBlogPost
          title={"UI Interactions of the week"}
          date={"12 Feb 2019"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          category={"Express, Handlebars"}
        />
        <ResponsiveBlogPost
          title={"UI Interactions of the week"}
          date={"12 Feb 2019"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          category={"Express, Handlebars"}
        />
      </Flex>

      {/**For Desktop View */}
      <Flex
        justify="center"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        display={["none", "flex ", "flex", "flex"]}
        mt={10}
      >
        <Center>
          <Box
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" bold"
            fontSize=" 44px"
            lineHeight=" 60px"
            color="text.dark"
            width="690px"
          >
            Blogs
          </Box>
        </Center>
        <BlogPosts
          title={"UI Interactions of the week"}
          date={"12 Feb 2019"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          category={"Express, Handlebars"}
        />
        <BlogPosts
          title={"UI Interactions of the week"}
          date={"12 Feb 2019"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          category={"Express, Handlebars"}
        />
        <BlogPosts
          title={"UI Interactions of the week"}
          date={"12 Feb 2019"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          category={"Express, Handlebars"}
        />
        <BlogPosts
          title={"UI Interactions of the week"}
          date={"12 Feb 2019"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          category={"Express, Handlebars"}
        />
      </Flex>
    </>
  );
};

export default index;
