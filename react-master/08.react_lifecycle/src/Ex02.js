import React, { useState, useEffect } from "react";
import Weather from "./components/Weather";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";

/*
    실습) 날씨 앱 만들기
        1. 현재 위치(위도, 경도)를 navigator.geolocation 객체로부터 가져온다.
        2. 위도, 경도 정보를  Weather API로 현재 날씨 정보를 요청한다.
            - fetch API 활용, useEffect() 활용
            * fetch API : 서버의 데이터를 비동기 방식으로 요청하는 Web API
            fetch API 구조)
            fetch(url)
            .then((respnse)=>{
                실행할 로직
            })
            .catch((error)=>{
                오류가 발생했을 때 실행할 로직
            })
            .finally(()=>{
                무조건 실행할 로직
            })


        3. 받아온 정보 중에서 지역, 온도, 날씨 이미지를 화면에 출력한다.
            - 날씨 정보는 state로 관리
            - 날짜 정보 출력
            - 
*/

const Ex02 = () => {
  // 날씨 정보를 저장하는 state
  const [weather, setWeather] = useState(null);
  const [day, setDay] = useState("0000.00.00");
  const [isLoading, setIsLoading] = useState(false);

  // 환경변수 파일인 .env로부터 API_KEY 가져오기
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log("api키", API_KEY);

  // 현재 위치(위, 경도)를 가져오는 함수
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;

      console.log("현재 위치(위,경도):", lat, lng);
      getCurrentWeather(lat, lng);
    });
  };

  // 현재 위치의 날씨 정보를 요청하는 함수
  const getCurrentWeather = async (lat, lng) => {
    const api_key = "94779e901090f264d5a345c5d2e8183f";
    const Weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    setIsLoading(true)
    
    //    응답 받기
    let response = await axios.get(Weather_url);
    // let data = await response.json()

    console.log("현재 날씨 정보:", response);
    setWeather(response.data);
    setIsLoading(false)
  };
  useEffect(() => {
    // 현재 날짜 정보 가져오기
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    // 날짜 정보를 state에 저장

    setDay(`${year}.${month}.${date}`);

    // 현재 날씨 정보 요청
    getCurrentLocation();
  }, []);

  return (
    <div>
      {isLoading ? (
        <SyncLoader loading={isLoading} />
      ) : (
        <Weather weather={weather} day={day} />
      )}
    </div>
  );
};

export default Ex02;
