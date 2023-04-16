import React from "react";
import styled from "styled-components";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Sidebar } from "./components/features/Sidebar/Sidebar";

const SidebarContainer = styled.div`
  width: 80px;
  height: 100%;
  background-color: #878787;
`;

const MainContentsContainer = styled.div`
  width: calc(100% - 80px);
  height: 100%;
  background-color: #fff;
`;

const BodyDivider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function App() {
  return (
    <>
      <BodyDivider>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <MainContentsContainer>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainContentsContainer>
      </BodyDivider>
    </>
  );
}

export default App;
