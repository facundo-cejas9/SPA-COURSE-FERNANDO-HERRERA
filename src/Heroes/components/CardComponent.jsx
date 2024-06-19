import { Link } from 'react-router-dom'
import 'animate.css';

export const CardComponent = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
 }) => {


const heroImage = `/assets/heroes/${id}.jpg`

  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg flex flex-col h-full pb-3 bg-slate-100">
    <img className="animate__bounceInDown w-full" src={heroImage} alt={superhero} />
    <div className="px-6 py-4 flex-grow">
      <div className="font-bold text-xl mb-2">{superhero}</div>
      <p className="text-gray-700 text-base">
        {characters !== superhero ? characters : ''}
      </p>
      <p>{first_appearance}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <Link to={`/heroes/${id}`}>
      <button className="p-2 w-full rounded-md bg-slate-900 text-white">More info</button>
      </Link>
      
    </div>
  </div>
  );
};
