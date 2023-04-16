import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerContainer = styled.div`
  padding: 20px 20px 0 20px;
`;

export const Sidebar = () => {
  return (
    <>
      <HamburgerContainer>
        <GiHamburgerMenu color="white" size="40px" />
      </HamburgerContainer>
    </>
  );
};
