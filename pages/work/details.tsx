import { Box } from "@chakra-ui/react";
import React from "react";
import "@fontsource/heebo";
import dashboard from "public/images/dashboard.png";
import rCar from "public/images/red-car.png";
import delivery from "public/images/delivery.png";
import WorkDetails from "components/Featured/WorkDetails";
import dboard from "public/images/designing_dashboard.png";

const details = () => {
  return (
    <Box
      height="auto"
      mb={8}
      mt={{ lg: 20, base: 8 }}
      pl={{ base: 4 }}
      pr={{ base: 4 }}
      width="full"
    >
      <WorkDetails
        image1={dashboard}
        h1={"Heading 1"}
        h2={"Heading 2"}
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet."
        category="Dashboard, User Experience Design"
        year={2020}
        title="Designing Dashboards with usability in mind"
        image2={rCar}
        image3={delivery}
      />
    </Box>
  );
};

export default details;
