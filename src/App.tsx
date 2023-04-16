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
  position: fixed;
`;

function App() {
  return (
    <>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
