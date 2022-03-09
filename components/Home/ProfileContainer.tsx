import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import "@fontsource/heebo";
import Image from "next/image";
import profile from "public/images/profile_pic.png";
import Profile from "./Profile/Profile";

const AboutMe = () => {
  return (
    <Box pt={8}>
      <Profile
        image={profile}
        name={"Hi, I am John, Creative Technologist"}
        content={
          " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
      />
    </Box>
  );
};

export default AboutMe;
