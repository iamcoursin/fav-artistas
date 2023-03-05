import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Header } from "../components/header";

export const MainRouter = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
