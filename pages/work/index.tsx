import React from "react";
import { Box, Flex, Center } from "@chakra-ui/react";
import FeaturedData from "components/Featured/Featured";
import dboard from "public/images/designing_dashboard.png";
import vportrait from "public/images/vibrants_portraits.png";
import malayalam from "public/images/malayalam_type.png";
import landing_page from "public/images/landing_pages.png";
import component from "public/images/components.png";
import "@fontsource/heebo";
import Link from "next/link";

const work = () => {
  return (
    <Box pl={4} pr={4} mt={{ lg: 24, base: 6 }} width="full">
      <Center>
        <Flex
          flexDirection="column"
          justify="center"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="9.75rem"
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" 900"
            fontSize={{ lg: "2.75rem", base: "1.875rem" }}
            lineHeight=" 60px"
            color="text.dark"
            alignSelf="start"
            mb={4}
          >
            Work
          </Box>
          <Link passHref href="/work/details">
            <Box _hover={{ cursor: "pointer" }}>
              <FeaturedData
                isWorkPage={true}
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
            isWorkPage={true}
            image={vportrait}
            title={"Vibrant Portraits of 2020"}
            date={2018}
            category={"Illustration"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />

          <FeaturedData
            isWorkPage={true}
            image={malayalam}
            title={"36 Days of Malayalam type"}
            date={2018}
            category={"Typography"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <FeaturedData
            isWorkPage={true}
            image={component}
            title={"Components"}
            date={2018}
            category={"Components, Design"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
        </Flex>
      </Center>
    </Box>
  );
};

export default work;
