import { Box, Center, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import dboard from "public/images/designing_dashboard.png";
import vportrait from "public/images/vibrants_portraits.png";
import malayalam from "public/images/malayalam_type.png";
import FeaturedData from "components/Featured/FeaturedData";
import ResponsiveFeaturedData from "components/Featured/ResponsiveFeaturedData";

const FeaturedWorks = () => {
  return (
    <Box pt={5}>
      {/**For mobile View */}
      <Flex
        display={["flex", "flex", "none", "none"]}
        justify="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          fontSize="18px"
          lineHeight="60px"
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="normal"
          color="text.dark"
        >
          Featured Works
        </Box>

        <Flex flexDirection="column" gap={5}>
          <ResponsiveFeaturedData
            image={dboard}
            title={"Designing Dashboard"}
            date={2020}
            category={"Dashboard"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <Divider orientation="horizontal" />
          <ResponsiveFeaturedData
            image={vportrait}
            title={"Vibrant Portraits of 2020"}
            date={2018}
            category={"Illustration"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <Divider orientation="horizontal" />
          <ResponsiveFeaturedData
            image={malayalam}
            title={"36 Days of Malayalam type"}
            date={2018}
            category={"Typography"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <Divider orientation="horizontal" color=" #E0E0E0" />
        </Flex>
      </Flex>

      {/**For Full Screen Display */}
      <Flex display={["none", "none", "flex", "flex"]} flexDirection="column">
        <Center>
          <Box
            fontFamily="Heebo"
            fontStyle="normal"
            fontWeight="normal"
            fontSize="22px"
            lineHeight="60px"
            width="850px"
            color="text.dark"
          >
            Featured works
          </Box>
        </Center>
        <Center>
          <Flex flexDirection="column" gap={5}>
            <FeaturedData
              image={dboard}
              title={"Designing Dashboard"}
              date={2020}
              category={"Dashboard"}
              content={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
            />
            <Divider orientation="horizontal" />
            <FeaturedData
              image={vportrait}
              title={"Vibrant Portraits of 2020"}
              date={2018}
              category={"Illustration"}
              content={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
            />
            <Divider orientation="horizontal" />
            <FeaturedData
              image={malayalam}
              title={"36 Days of Malayalam type"}
              date={2018}
              category={"Typography"}
              content={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
            />
            <Divider orientation="horizontal" color=" #E0E0E0" />
          </Flex>
        </Center>
      </Flex>
    </Box>
  );
};

export default FeaturedWorks;
