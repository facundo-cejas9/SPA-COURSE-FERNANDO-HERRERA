import React from "react";
import { HeroComponent } from "../components/HeroComponent";
import { heroes } from "../data/hero";

export const HomePage = ({ searchTerms }) => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-5 text-3xl font-bold">All Heros</h1>
      <hr className="mb-10" />
      <div className="">
        <HeroComponent superHeros={heroes} searchTerms={searchTerms} />
        
      </div>
    </div>
  );
};
