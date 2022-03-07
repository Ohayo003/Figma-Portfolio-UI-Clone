import { Box, Center, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Recent from "components/Home/Recent/Recent";
import "@fontsource/heebo";
import ResponsiveRecent from "components/Home/Recent/ResponsiveRecent";

const RecentPost = () => {
  return (
    <>
      {/**For Mobile View */}
      <Flex
        height="647px"
        flexDirection="column"
        mt={10}
        display={["flex", "flex", "none", "none"]}
        pt="20px"
        width="100%"
        pb="20px"
        background="container.light"
      >
        <Center>
          <Box
            width="100vw"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
          >
            <Flex flexDirection="row" justify="center" alignItems="center">
              <Box
                fontFamily=" Heebo"
                fontStyle=" normal"
                fontWeight=" 400"
                fontSize=" 18px"
                lineHeight=" 60px"
              >
                Recent Post
              </Box>
            </Flex>
          </Box>
        </Center>
        <Flex
          justify="center"
          flexDirection="column"
          gap="17px"
          justifyContent="space-evenly"
        >
          <ResponsiveRecent
            title={"Making a design system from scratch"}
            date={"12 Feb 2020"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            category={"Design, Pattern"}
          />
          <ResponsiveRecent
            title={"Creating pixel perfect icons in Figma"}
            date={"12 Feb 2020"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            category={"Figma, Icon Design"}
          />
        </Flex>
      </Flex>

      {/**For Desktop View */}
      <Flex
        height="396px"
        flexDirection="column"
        mt={10}
        display={["none", "none", "flex", "flex"]}
        pt="20px"
        width="100%"
        pb="20px"
        background="container.light"
      >
        <Center>
          <HStack width="860px" gap="15px">
            <Box
              fontFamily=" Heebo"
              fontStyle=" normal"
              width="418px"
              fontWeight=" normal"
              fontSize=" 22px"
              lineHeight=" 60px"
              alignItems="flex-end"
            >
              Recent Post
            </Box>
            <Box
              fontFamily=" Heebo"
              fontStyle=" normal"
              fontWeight=" normal"
              fontSize=" 18px"
              width="418px"
              lineHeight=" 60px"
              textAlign="right"
              color="text.secondary"
            >
              View all
            </Box>
          </HStack>
        </Center>
        <Flex justify="center" justifyContent="center" gap="20px">
          <Recent
            title={"Making a design system from scratch"}
            date={"12 Feb 2020"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            category={"Design, Pattern"}
          />
          <Recent
            title={"Creating pixel perfect icons in Figma"}
            date={"12 Feb 2020"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            category={"Figma, Icon Design"}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default RecentPost;
