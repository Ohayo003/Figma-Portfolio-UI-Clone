import { Box, Center, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import dboard from "public/images/designing_dashboard.png";
import vportrait from "public/images/vibrants_portraits.png";
import malayalam from "public/images/malayalam_type.png";
import FeaturedData from "components/Featured/Featured";
import WorkDetails from "components/Featured/WorkDetails";

const FeaturedWorks = () => {
  return (
    <Box pl={5} pr={5} mt={3.5} pb={{ base: 36, lg: 20 }}>
      <Center>
        <Flex flexDirection="column">
          {/* Heading */}
          <Box
            fontFamily="Heebo"
            fontStyle="normal"
            height="3.75rem"
            fontWeight="400"
            fontSize={{ lg: "1.375rem", base: "1.125rem" }}
            lineHeight="3.75rem"
            width={{ lg: "9.5rem", base: "7.75rem" }}
            color="text.dark"
            alignSelf={{ base: "center", lg: "start" }}
          >
            Featured works
          </Box>
          <FeaturedData
            image={dboard}
            title={"Designing Dashboard"}
            date={2020}
            category={"Dashboard"}
            isWorkPage={false}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <FeaturedData
            image={vportrait}
            isWorkPage={false}
            title={"Vibrant Portraits of 2020"}
            date={2018}
            category={"Illustration"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <FeaturedData
            isWorkPage={false}
            image={malayalam}
            title={"36 Days of Malayalam type"}
            date={2018}
            category={"Typography"}
            content={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
        </Flex>
      </Center>
    </Box>
  );
};

export default FeaturedWorks;
