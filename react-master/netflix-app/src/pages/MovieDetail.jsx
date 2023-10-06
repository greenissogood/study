import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "react-bootstrap";
import api from "../api";

// /movies/1 -> useParams()
// /moveis?id=1 -> useSearchParams()

const MovieDetail = () => {
  const { id } = useParams();
  // console.log("[MovieDetail.js]:", id);

  const [movieDetail, setMovieDetail] = useState(null);
  const [reviews, setReviews] = useState([]);

  const getMovieDetail = async () => {
    const res = await api.get(`/movie/${id}?language=ko-KR`);
    console.log("[MovieDetail.js]", res.data);

    setMovieDetail(res.data);
  };

  const getReviews = async () => {
    let res = await api.get(`/movie/${id}/reviews?language=en-US&page=1`);
    console.log(res.data);
    setReviews(res.data.results);
  };

  useEffect(() => {
    getMovieDetail();
    getReviews();
  }, []);

  console.log("movieDetail", movieDetail);
  return (
    <div className="container movieDetails">
      <div className="movieDetails-explain">
        <div className="poster">
          <img
            src={`https://www.themoviedb.org/t/p/original${movieDetail?.poster_path}`}
            alt="포스터"
          />
        </div>
        <div className="info">
          <div className="genre">
            {movieDetail?.genres.map((item) => (
              <Badge bg="danger" key={item.id}>
                {" "}
                {item.name}
              </Badge>
            ))}
          </div>
          <div>
            <h1>{movieDetail?.title}</h1>
            <h4>{movieDetail?.title}</h4>
          </div>
          <div>
            <span>{movieDetail?.relase_date}</span>
            <span>{movieDetail?.runtime}</span>
            <span>{movieDetail?.vote_average}</span>
            <span>{movieDetail?.adult ? "청불" : "18세 미만"}</span>
          </div>
          <div className="overview">{movieDetail?.overview}</div>
        </div>
      </div>

      {/* 리뷰박스 */}

      <div className="container reviewBox">
        {reviews.map((item) => (
          <div className="reviewItem">
            <h4>{item.author}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
