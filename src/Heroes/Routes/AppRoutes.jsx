import React from "react";
import { Route, Routes } from "react-router";
import { Navbar } from "../../ui/components/Navbar";
import { DcPage, Hero, MarvelPage, SearchPage } from "../pages";


export const AppRoutes = () => {


  return (
    <>
      <Navbar />
      <div className="container m-auto mt-5  items-center">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path='heroes/:id' element={<Hero />} />
          <Route path="dc" element={<DcPage />} />
        </Routes>
      </div>
    </>
  );
};
