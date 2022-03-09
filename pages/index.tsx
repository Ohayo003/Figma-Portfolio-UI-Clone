import { Box, VStack } from "@chakra-ui/react";
import AboutMe from "components/Home/ProfileContainer";
import FeaturedWorks from "components/Home/FeaturedWorkContainer";
import RecentPost from "components/Home/RecentPostContainer";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box height="auto" width="full" maxW="full">
      <AboutMe />
      <RecentPost />
      <FeaturedWorks />
    </Box>
  );
};

export default Home;
