import { Box, Center, Flex, Divider, VStack } from "@chakra-ui/react";
import React from "react";
import "@fontsource/heebo";
import Recent from "components/Blogs/BlogPost";
import BlogPost from "components/Blogs/BlogPost";
import { FaCentercode } from "react-icons/fa";

const index = () => {
  return (
    <Box pr={4} pl={4} mt={{ lg: 28, base: 6 }}>
      <Center>
        <VStack>
          <Box
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" 700"
            fontSize={{ lg: "2.75rem", base: "1.875rem" }}
            width={{ lg: "9.75em", base: "3.875rem" }}
            lineHeight=" 60px"
            color="text.dark"
            alignSelf="start"
            mb={4}
          >
            Blog
          </Box>
          {/* <VStack> */}
          <BlogPost
            title={"UI Interactions of the week"}
            date={"12 Feb 2020"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            category={"Design, Pattern"}
            isBlogPage={true}
          />
          <Box
            pb={{ lg: 8, base: 5 }}
            pt={{ lg: 10, base: 6 }}
            width={{ lg: "42.625rem", base: "21.188rem" }}
            m={["0 !important"]}
          >
            <Divider orientation="horizontal" borderColor="divider.light" />
          </Box>
          <BlogPost
            isBlogPage={true}
            title={"UI Interactions of the week"}
            date={"12 Feb 2020"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            category={"Design, Pattern"}
          />
          <Box
            pb={{ lg: 8, base: 5 }}
            pt={{ lg: 4, base: 6 }}
            width={{ lg: "42.625rem", base: "21.188rem" }}
            m={["0 !important"]}
          >
            <Divider orientation="horizontal" borderColor="divider.light" />
          </Box>
          <BlogPost
            isBlogPage={true}
            title={"UI Interactions of the week"}
            date={"12 Feb 2020"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            category={"Design, Pattern"}
          />
          <Box
            pb={{ lg: 8, base: 5 }}
            pt={{ lg: 10, base: 6 }}
            width={{ lg: "42.625rem", base: "21.188rem" }}
            m={["0 !important"]}
          >
            <Divider orientation="horizontal" borderColor="divider.light" />
          </Box>
          <BlogPost
            isBlogPage={true}
            title={"UI Interactions of the week"}
            date={"12 Feb 2020"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            category={"Design, Pattern"}
          />
          <Box
            pb={{ lg: 8, base: 5 }}
            pt={{ lg: 10, base: 6 }}
            width={{ lg: "42.625rem", base: "21.188rem" }}
            m={["0 !important"]}
          >
            <Divider orientation="horizontal" borderColor="divider.light" />
          </Box>
          {/* </VStack> */}
        </VStack>
      </Center>
    </Box>
  );
};

export default index;
