import React from "react";
import { Route, Routes } from "react-router";
import { Navbar } from "../../ui/components/Navbar";
import { DcPage, Hero, MarvelPage, SearchPage } from "../pages";
import { LoginPage } from "../../Auth/pages/LoginPage";

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<Hero />} />
          <Route path="dc" element={<DcPage />} />
        </Routes>
      </div>
    </>
  );
};
