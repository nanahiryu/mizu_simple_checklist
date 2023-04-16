import { Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/features/SideBar/SideBar";
import { Home } from "../components/pages/Home";

export const Router = () => {
  return (
    <>
      <Flex>
        <Flex w="80px" bg="#878787">
          <Sidebar />
        </Flex>
        <Flex>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Flex>
      </Flex>
    </>
  );
};
