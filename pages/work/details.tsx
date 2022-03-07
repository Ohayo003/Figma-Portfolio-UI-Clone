import { Box, Center, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import "@fontsource/heebo";
import Image from "next/image";
import dashboard from "public/images/dashboard.png";
import rCar from "public/images/red-car.png";
import delivery from "public/images/delivery.png";

const details = () => {
  return (
    <Box height="auto" mb={10}>
      {/**For Mobile View */}
      <Flex
        display={["flex", "flex", "none", "none"]}
        flexDirection="column"
        gap={5}
        justify="center"
        alignItems="center"
      >
        <Box
          fontFamily=" Heebo"
          fontStyle=" normal"
          fontWeight=" bold"
          fontSize=" 30px"
          width="339px"
          lineHeight=" 40px"
        >
          Designing Dashboards with usability in mind
        </Box>
        <HStack width="339px" align="start" gap={4}>
          <Box
            width=" 62px"
            height=" 25px"
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" 900"
            fontSize=" 18px"
            lineHeight=" 30px"
            color="text.white"
            background="#FF7C7C"
            borderRadius="16px"
            textAlign="center"
          >
            2020
          </Box>
          <Box
            fontFamily="Heebo"
            fontStyle="normal"
            fontWeight="normal"
            fontSize="18px"
            width="262px"
            lineHeight="26.44px"
            color="text.dark"
          >
            Dashboard, User Experience Design
          </Box>
        </HStack>
        <Box
          width="339px"
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="normal"
          fontSize="16px"
          lineHeight="23.5px"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Box>
        <Box width="339px" height="256px" zIndex={-1}>
          <Image src={dashboard} alt="dashboard" layout="responsive" />
        </Box>
        <Box
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="500"
          fontSize="26px"
          width="339px"
          height="60px "
          lineHeight="60px"
          textAlign="left"
        >
          Heading 1
        </Box>
        <Box
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="500"
          fontSize="20px"
          width="339px"
          lineHeight="60px"
        >
          Heading 2
        </Box>
        <Box
          width="339px"
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="normal"
          fontSize="16px"
          lineHeight="23.5px"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Box>
        <Box width="339px" height="256px" zIndex={-1}>
          <Image src={rCar} alt="red car" layout="responsive" />
        </Box>
        <Box width="339px" height="256px" zIndex={-1}>
          <Image src={delivery} alt="order receipt" layout="responsive" />
        </Box>
      </Flex>

      {/**For Desktop View */}
      <Flex
        display={["none", "none", "flex", "flex"]}
        flexDirection="column"
        gap={5}
        justify="center"
        alignItems="center"
      >
        <Box
          fontFamily=" Heebo"
          fontStyle=" normal"
          fontWeight=" bold"
          fontSize=" 34px"
          ml="-180px"
          width="506px"
          lineHeight=" 50px"
        >
          Designing Dashboards with usability in mind
        </Box>
        <HStack width="681px" align="start" gap={4}>
          <Box
            width=" 62px"
            height=" 25px"
            fontFamily=" Heebo"
            fontStyle=" normal"
            fontWeight=" 900"
            fontSize=" 18px"
            lineHeight=" 30px"
            color="text.white"
            background="#FF7C7C"
            borderRadius="16px"
            textAlign="center"
          >
            2020
          </Box>
          <Box
            fontFamily="Heebo"
            fontStyle="normal"
            fontWeight="normal"
            fontSize="20px"
            lineHeight="29px"
            color="text.dark"
          >
            Dashboard, User Experience Design
          </Box>
        </HStack>
        <Box
          width="681px"
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="normal"
          fontSize="16px"
          lineHeight="24px"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Box>
        <Box width="681px" height="460px" zIndex={-1}>
          <Image src={dashboard} alt="dashboard" />
        </Box>
        <Box
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="500"
          fontSize="30px"
          width="681px"
          height="45px"
          lineHeight="60px"
        >
          Heading 1
        </Box>
        <Box
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="500"
          fontSize="24px"
          width="681px"
          lineHeight="60px"
        >
          Heading 2
        </Box>
        <Box
          width="681px"
          fontFamily="Heebo"
          fontStyle="normal"
          fontWeight="normal"
          fontSize="16px"
          lineHeight="24px"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Box>
        <Box width="681px" height="460px" zIndex={-1}>
          <Image src={rCar} alt="red car" />
        </Box>
        <Box width="681px" height="460px" zIndex={-1}>
          <Image src={delivery} alt="order receipt" />
        </Box>
      </Flex>
    </Box>
  );
};

export default details;
