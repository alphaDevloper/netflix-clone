import React, { useEffect, useRef, useState } from "react";
import cards_data from "../../public/assets/cards/Cards_data";
import "../App.css";
import { Link } from "react-router-dom";

const TitleCard = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTU1YmMwNTIxZDVkYzRlZWU2YWI2MDhjODE5NzI2NiIsIm5iZiI6MTczODE1MDA0My45NzEsInN1YiI6IjY3OWExMDliYTA1YjYzNDM1Y2E5NzVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6YA6eUnfDnVRWogkq5xYlXrYB7glRqGQyDwp9qsDwNQ",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className=" ">
      <h2 className="mb-2 font-semibold sm:text-xl">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div
        ref={cardsRef}
        className="card-list flex gap-[10px] overflow-x-scroll"
      >
        {apiData.map((card, index) => (
          <Link
            to={`/player/${card.id}`}
            className="card relative min-w-[240px]"
            key={index}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.poster_path}
              alt=""
              className="rounded cursor-pointer lg:w-[240px] w-[100px]"
            />
            <p className="absolute bottom-2.5 right-2.5 lg:text-xl text-[10px]">
              {card.original_title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
