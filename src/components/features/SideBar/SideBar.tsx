import { Box, Flex } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";

const Sidebar = () => {
  return (
    <Flex w="full" h="full" bg="bg.teal">
      <Box m="20px">
        <GiHamburgerMenu color="white" size="40px" />
      </Box>
    </Flex>
  );
};

export default Sidebar;
