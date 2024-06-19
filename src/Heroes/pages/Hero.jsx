import React from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { getHeroById } from "../helpers/getHeroById";

export const Hero = () => {
  const { id } = useParams();

  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/marvel");
  };

  const heroImage = `/assets/heroes/${id}.jpg`;

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className=" animate__animated animate__fadeIn">
      <h1 className=" mb-5 p-5 text-3xl font-bold">About { superhero }</h1>
      <hr className="mb-10" />
      <div className="flex flex-col justify-start max-w-2xl m-5">
        <div className="flex flex-col sm:flex-row h-auto sm:h-[700px] w-auto sm:w-[400px] md:w-[700px] bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg h-[300px] sm:h-auto w-auto sm:w-[300px] md:w-[400px] "
            src={heroImage}
            alt={superhero}
          />

          <div className="p-5">
            <h1 className="text-gray-900 font-bold text-3xl tracking-tight mb-2 dark:text-white">
              {superhero}
            </h1>

            <div className="flex flex-col content-center">
              <p className="text-white text-bold mb-5 mt-5">
                First Appearance:{" "}
                <span className="font-bold font-sans">
                  {" "}
                  {first_appearance}{" "}
                </span>
              </p>
              <p className="text-white text-bold mb-5 mt-5">
                Alter ego:{" "}
                <span className="font-bold font-sans"> {alter_ego} </span>
              </p>
              <p className="text-white text-bold mb-5 mt-5">
                Publisher:{" "}
                <span className="font-bold font-sans"> {publisher} </span>
              </p>
              <p className="text-white text-bold mb-5 mt-5">
                Characters:{" "}
                <span className="font-bold font-sans"> {characters} </span>
              </p>
            </div>
            <button
            onClick={navigateBack}
            className="p-2 mt-5 w-[50%] rounded-md bg-slate-600 text-white"
          >
            Back To menu
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
