import React from "react";
import { getHeroByPublisher } from "../helpers/getHeroByPublisher";
import { CardComponent } from "./CardComponent";

export const HeroComponent = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10 items-center">
      {
        heroes.map((hero) => (
          <CardComponent key={hero.id} { ...hero } />
        ))
      }
    </div>
  );
};
