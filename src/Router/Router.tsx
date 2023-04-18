import { Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/features/SideBar/SideBar";
import { Home } from "../components/pages/Home";

export const Router = () => {
  return (
    <>
      <Flex h="full">
        <Flex w="80px" h="full">
          <Sidebar />
        </Flex>
        <Flex w="calc(100% - 80px)" h="full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Flex>
      </Flex>
    </>
  );
};
