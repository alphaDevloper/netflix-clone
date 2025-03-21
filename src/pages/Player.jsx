import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTU1YmMwNTIxZDVkYzRlZWU2YWI2MDhjODE5NzI2NiIsIm5iZiI6MTczODE1MDA0My45NzEsInN1YiI6IjY3OWExMDliYTA1YjYzNDM1Y2E5NzVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6YA6eUnfDnVRWogkq5xYlXrYB7glRqGQyDwp9qsDwNQ",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Link to="/">
        <img
          src="/assets/back_arrow_icon.png"
          alt=""
          className="absolute top-1.5 left-1.5 w-[50px] cursor-pointer"
        />
      </Link>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        width="90%"
        height="90%"
        className="rounded-xl"
        allowFullScreen
      ></iframe>
      <div className="player-info flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
