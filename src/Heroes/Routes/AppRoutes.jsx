import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { Navbar } from "../../ui/components/Navbar";
import { DcPage, Hero, MarvelPage, SearchPage } from "../pages";
import { HomePage } from "../pages/HomePage";


export const AppRoutes = () => {

  const [searchTerms, setSearchTerms] = useState('')

  const handleSearch = (search) => {
    setSearchTerms(search)
    
  }




  


  return (
    <>
      <Navbar onSearch={handleSearch}  />
      <div className="container m-auto mt-5  items-center">
        <Routes>
          <Route path="/"  element={<HomePage searchTerms={searchTerms} />} />
          <Route path="marvel"  element={<MarvelPage searchTerms={searchTerms} />} />
          <Route path="search"  element={<SearchPage />} />
          <Route path='heroes/:id' element={<Hero />} />
          <Route path="dc" element={<DcPage searchTerms={searchTerms} />} />
        </Routes>
      </div>
    </>
  );
};
