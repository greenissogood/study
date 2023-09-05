import React from 'react'

// ex01 맨 밑에서 weather 받아오는 거니까 소문자 weather로 맞춰서
const Weather = ({weather, day}) => {

    // 객체?.속성 : 객체에 정보가 null인지 판단
    // 바로 접근이 어려우니 물음표를 붙여서 null인지 판단하고 접근하게
    console.log('Weather 컴포넌트:', weather);
    console.log('지역:', weather?.name);
    console.log('온도', weather?.main.temp);
    console.log('아이콘', weather?.weather[0].icon);

    let ondo = weather?.main.temp
    let location = weather?.name
    /* 가져오기 위해서 변수 선언하고 들고옴 */

    let date = day
  return (
    <div>
        {/* 그냥 day 써도 됨 */}
        <h1>{date}</h1>
        <p>현재 <br />
        <div>
            <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="이미지없음" />
        </div>
        {location}은 {ondo}ºC입니다.</p>
        {/* location부분에 그냥 {weather?.name} ondo 부분에 {weather?.main.temp} 가능 */}
    </div>
  )
}

export default Weather