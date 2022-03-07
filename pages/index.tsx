import { Box, VStack } from "@chakra-ui/react";
import AboutMe from "components/Home/AboutMe";
import FeaturedWorks from "components/Home/FeaturedWorks";
import RecentPost from "components/Home/RecentPost";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box height="auto" width="100vw">
      <AboutMe />
      <RecentPost />
      <FeaturedWorks />
    </Box>
  );
};

export default Home;
