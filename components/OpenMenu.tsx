import { CloseIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Divider, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface IOpenMenu {
  onClose: () => void;
  handleActiveLink: (link: string) => void;
  active: string | null | undefined;
}

const OpenMenu = ({ onClose, handleActiveLink, active }: IOpenMenu) => {
  return (
    <Flex
      position="fixed"
      overflowY="auto"
      background="gray.50"
      width="inherit"
      w="full"
      flexDirection="column"
      h="20rem"
      zIndex={20}
      top="0"
      right="0"
    >
      <Flex justify="flex-end">
        <IconButton
          mr={5}
          mt={2}
          onClick={onClose}
          size="sm"
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
              handleActiveLink("Works");
              onClose();
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
              handleActiveLink("Blog");
              onClose();
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
  );
};

export default OpenMenu;
