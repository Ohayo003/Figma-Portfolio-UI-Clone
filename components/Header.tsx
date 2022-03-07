import { Box, Divider, Flex, IconButton } from "@chakra-ui/react";
import Head from "next/head";
import React, { useState } from "react";
import "@fontsource/heebo";
import Link from "next/link";
import { Icon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Header = () => {
  const [active, setActive] = useState<string | null>();
  const [openMenu, setOpenMenu] = useState(false);

  const handleSetActiveLink = (link: string) => {
    // var current: string = "";
    switch (link) {
      case "Works":
        setActive("Works");
        break;
      case "Blog":
        setActive("Blog");
        break;
      default:
        setActive("");
        break;
    }
  };

  return (
    <Box
      fontFamily="Heebo"
      fontStyle="normal"
      fontWeight="500"
      fontSize="20px"
      lineHeight="29px"
    >
      <Head>
        <title>Portfolio UI - Web & Mobile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex justify="right" justifyContent="end">
        <Flex display={["none", "none", "flex", "flex"]}>
          <Link passHref href="/work/">
            <Box
              m={5}
              _hover={{ cursor: "pointer" }}
              onClick={() => handleSetActiveLink("Works")}
              color={active === "Works" ? "tomato" : "#000000"}
            >
              Works
            </Box>
          </Link>
          <Link passHref href="/blog/">
            <Box
              m={5}
              _hover={{ cursor: "pointer" }}
              onClick={() => handleSetActiveLink("Blog")}
              color={active === "Blog" ? "tomato" : "#000000"}
            >
              Blog
            </Box>
          </Link>
          <Box m={5} _hover={{ cursor: "pointer" }}>
            Contact
          </Box>
        </Flex>
        <IconButton
          display={["flex", "flex", "none", "none"]}
          mt={3}
          mr={2}
          onClick={() => setOpenMenu(true)}
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon />}
        />
      </Flex>

      {/** Open Hamburger Menu */}
      {openMenu ? (
        <Flex
          position="fixed"
          overflowY="auto"
          background="gray.50"
          width="inherit"
          w="100vw"
          flexDirection="column"
          h="50vh"
          zIndex={20}
          top="0"
          right="0"
        >
          <Flex justify="flex-end">
            <IconButton
              mr={2}
              mt={2}
              onClick={() => setOpenMenu(false)}
              size="lg"
              aria-label="Close Menu"
              icon={<CloseIcon />}
            />
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            justify="center"
            width="inherit"
          >
            <Link passHref href="/work/">
              <Box
                m={5}
                _hover={{ cursor: "pointer" }}
                onClick={() => {
                  handleSetActiveLink("Works");
                  setOpenMenu(false);
                }}
                color={active === "Works" ? "tomato" : "#000000"}
              >
                Works
              </Box>
            </Link>
            <Divider orientation="horizontal" />
            <Link passHref href="/blog/">
              <Box
                m={5}
                _hover={{ cursor: "pointer" }}
                onClick={() => {
                  handleSetActiveLink("Blog");
                  setOpenMenu(false);
                }}
                color={active === "Blog" ? "tomato" : "#000000"}
              >
                Blog
              </Box>
            </Link>
            <Divider orientation="horizontal" />
            <Box m={5} _hover={{ cursor: "pointer" }}>
              Contact
            </Box>
          </Flex>
        </Flex>
      ) : null}
    </Box>
  );
};

export default Header;