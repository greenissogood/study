import React, { useState } from "react";
import "../App.css";
import { Badge } from "react-bootstrap";

const Moviecard = ({ movies, genre }) => {
  console.log("[MovieCard] : ", movies);
  console.log('[MovieCard1] :', genre);

  // genre 데이터에서 원하는 값을 찾기 위한 조건 함수
  const findGenreById = (id) => {
    return genre.find((item) => item.id === id);
  };

  const div_style = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movies.poster_path})`,
    width: "300px",
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <div style={div_style} className="movie-card">
      <div className="imgHover">
        <h1>{movies.title}</h1>
        <div>
          {movies.genre_ids.map((id) => {
            // findGenreById 함수를 사용하여 genre 데이터에서 해당 id에 맞는 데이터를 찾음
            const genreData = findGenreById(id);
            return (
              <Badge bg="danger" key={id} style={{ margin: '2px' }}>
                {genreData ? genreData.name : 'Unknown Genre'}
              </Badge>
            );
          })}
        </div>
        <div>
          <span className="genres">
            {`평점 : ${movies.vote_average} 점`}
          </span>
          <span>
            |
          </span>
          <span className="info">
            {movies.adult ? "성인" : "청소년"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
