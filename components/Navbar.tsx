import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import OpenMenu from "./OpenMenu";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <>
      <Flex justify="right" justifyContent="end" gap={8}>
        <Flex display={{ base: "none", md: "flex" }}>
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
          display={{
            base: "flex",
            md: "none",
          }}
          mt={2}
          onClick={onOpen}
          aria-label="Open Menu"
          size="sm"
          icon={<HamburgerIcon />}
        />
      </Flex>
      {/** Open Hamburger Menu */}
      {isOpen ? (
        <OpenMenu
          onClose={onClose}
          handleActiveLink={handleSetActiveLink}
          active={active}
        />
      ) : null}
    </>
  );
};

export default Navbar;
