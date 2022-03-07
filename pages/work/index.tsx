import React from "react";
import { Box, Flex, Center } from "@chakra-ui/react";
import FeaturedData from "components/Featured/FeaturedData";
import dboard from "public/images/designing_dashboard.png";
import vportrait from "public/images/vibrants_portraits.png";
import malayalam from "public/images/malayalam_type.png";
import landing_page from "public/images/landing_pages.png";
import component from "public/images/components.png";
import "@fontsource/heebo";
import Link from "next/link";
import ResponsiveFeaturedData from "components/Featured/ResponsiveFeaturedData";

const work = () => {
  return (
    <>
      {/**For Mobile View */}
      <Flex
        mt={10}
        flexDirection="column"
        justify="center"
        justifyContent="center"
        display={["flex", "flex", "none", "none"]}
        alignItems="center"
        gap={5}
      >
        <Box
          width="339px"
          fontFamily=" Heebo"
          fontStyle=" normal"
          fontWeight=" 700"
          textAlign="left"
          fontSize=" 30px"
          lineHeight=" 60px"
          color="text.dark"
        >
          Work
        </Box>
        <Link passHref href="/work/details">
          <Box _hover={{ cursor: "pointer" }}>
            <ResponsiveFeaturedData
              image={dboard}
              title={"Designing Dashboard"}
              date={2020}
              category={"Dashboard"}
              content={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
            />
          </Box>
        </Link>
        <ResponsiveFeaturedData
          image={landing_page}
          title={"Designing Landing Pages"}
          date={2020}
          category={"Website"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />
        <ResponsiveFeaturedData
          image={vportrait}
          title={"Vibrant Portraits of 2020"}
          date={2018}
          category={"Illustration"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />
        <ResponsiveFeaturedData
          image={malayalam}
          title={"36 Days of Malayalam type"}
          date={2018}
          category={"Typography"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />
        <ResponsiveFeaturedData
          image={component}
          title={"Components"}
          date={2018}
          category={"Components, Design"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />
      </Flex>

      {/**For Desktop View */}
      <Flex
        mt={10}
        flexDirection="column"
        justify="center"
        justifyContent="center"
        display={["none", "none", "flex", "flex"]}
        alignItems="center"
        gap={5}
      >
        <Center>
          <Box
            width="855px"
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" 900"
            fontSize=" 44px"
            lineHeight=" 60px"
            color="text.dark"
          >
            Work
          </Box>
        </Center>
        <Link passHref href="/work/details">
          <Box _hover={{ cursor: "pointer" }}>
            <FeaturedData
              image={dboard}
              title={"Designing Dashboard"}
              date={2020}
              category={"Dashboard"}
              content={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
            />
          </Box>
        </Link>
        <FeaturedData
          image={vportrait}
          title={"Vibrant Portraits of 2020"}
          date={2018}
          category={"Illustration"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />
        <FeaturedData
          image={malayalam}
          title={"36 Days of Malayalam type"}
          date={2018}
          category={"Typography"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />
        <FeaturedData
          image={component}
          title={"Components"}
          date={2018}
          category={"Components, Design"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />
      </Flex>
    </>
  );
};

export default work;
