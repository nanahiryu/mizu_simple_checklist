import { Box } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <Box m="20px">
        <GiHamburgerMenu color="white" size="40px" />
      </Box>
    </>
  );
};

export default Sidebar;
