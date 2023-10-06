import React, { useEffect, useState } from "react";
import axios from "../api";
import { useDispatch } from "react-redux";
import { MovieReducerActions } from "../redux/reducers/movieSlice";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  // 요청할 dispatch 선언
  const dispatch = useDispatch();

  // const popularMovies = useSelector((state) => state.movie.popularMovies);
  // const topRatedMovies = useSelector((state) => state.movie.topRated);
  // const upcomingMoives = useSelector((state) => state.movie.upcoming);

  // 위에 코드를 밑으로 바꾼 것
  const {popularMovies, topRatedMovies, upcomingMovies,genreList} = useSelector(
    (state)=>state.movie
  )
  // useSelector로 선택해서 값을 꺼내오겠다.
  // {} 객체들이고 state.movie라는 state를 꺼내오겠다.

  console.log("[Home.jsx]:", popularMovies);

  const [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  // 이걸 밑으로 정의함

  // const popularReq = async()=>{
  //   let res = await axios.get('/movie/popular?language=ko-KR&page=1')
  //   console.log(res);
  // }
  // const topRateReq = async()=>{
  //   let res = await axios.get('/movie/top_rated?language=ko-KR&page=1')
  //   console.log(res);
  // }
  // const upComingReq = async()=>{
  //   let res = await axios.get('/movie/upcoming?language=ko-KR&page=1')
  //   console.log(res);`/
  // }

  // 3가지 종류의 영화 목록을 묶어서 요청하는 방법
  const getMovieList = async () => {
    setIsLoading(true); //데이터를 가져오기 전

    const popularList = axios.get("/movie/popular?language=ko-KR&page=1");
    const topRatedList = axios.get("/movie/top_rated?language=ko-KR&page=1");
    const upcomingList = axios.get("/movie/upcoming?language=ko-KR&page=1");

    const genreList = axios.get('/genre/movie/list?language=ko')

    // await 순차적으로 실행하라고 붙여 준다고 함 배열로 반환
    // Promise.all 한 번에 묶어서 요청하는 --> 모든 요청에 대한 응답이 올 때까지 대기
    // 모두 다 응답이 도착할 때까지 기다렸다가 응답이 오면 데이터를 넣어 줌
    const [popular, topRated, upcoming, genre] = await Promise.all([
      popularList,
      topRatedList,
      upcomingList,
      genreList
    ]);
    console.log(popular);
    console.log(topRated);
    console.log(upcoming);
    console.log('장르', genre);

    dispatch(
      MovieReducerActions.initData({
        popular: popular.data,
        topRated: topRated.data,
        upcoming: upcoming.data,
        genre : genre.data
      })
    );
    setIsLoading(false); //데이터를 가져온 후
  };

  useEffect(() => {
    getMovieList();
    // popularReq()
    // topRateReq()
    // upComingReq()
  }, []);
  console.log('장르리스트', genreList);
  // true : 데이터를 가져오기 전
  // false : 데이터를 가져온 후
  return (
    <div>
      <div>
        {isLoading ? (
          <ClipLoader
            color={color}
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <Banner movie={popularMovies[0]} />
        )}
      </div>

      {/* popularMovies 얘가 없을 때도 배너가 나오려고 해서 오류가 뜨니까 조건을 걸어서 있을 때만 나오게 */}
      {/* {popularMovies && <Banner movie={popularMovies[0]}/>} */}

      <h1>실시간 인기 순위</h1>
      <MovieSlide movies={popularMovies} genre={genreList}/>
      <h1>평점이 높은 순위</h1>
      <MovieSlide movies={topRatedMovies} genre={genreList} />
      <h1>개봉 예정 영화</h1>
      <MovieSlide movies={upcomingMovies} genre={genreList}/>
    </div>
  );
};

export default Home;
