import React from "react";
import { getHeroByPublisher } from "../helpers/getHeroByPublisher";
import { CardComponent } from "./CardComponent";

export const HeroComponent = ({ superHeros = [], publisher = null, searchTerms }) => {
  let heroes = superHeros; // Usamos los héroes pasados como prop si están disponibles
  if (!superHeros || superHeros.length === 0) {
    // Si no se pasaron héroes como prop, obtenemos todos los héroes
    heroes = getHeroByPublisher(publisher);
  }

  // Filtrar héroes por el término de búsqueda en el nombre (superhero)
  const heroesFiltered = heroes.filter((hero) => {
    const superhero = hero.superhero ? hero.superhero.toLowerCase() : '';
    const searchTerm = searchTerms ? searchTerms.toLowerCase() : '';
    
    // Mostrar todos los héroes si searchTerms está vacío, o filtrar por searchTerm
    return searchTerm === '' || superhero.includes(searchTerm);
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10 items-center">
      {heroesFiltered.map((hero) => (
        <CardComponent key={hero.id} {...hero} />
      ))}
    </div>
  );
};
