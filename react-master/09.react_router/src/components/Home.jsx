import React from "react";
import { Link, useNavigate } from "react-router-dom";

/*
  실습)
    1. 로그인 상태를 판단하여 '로그인' or '로그아웃'으로 출력해 보기
        - loginState를 이용해 조건부 렌더링으로 출력

    2. '로그아웃' 버튼을 클릭했을 때, '로그인' 상태로 전환하기
        - useNavigate를 이용해 loginState값 판단 후 상태값 전환
        - 로그인 상태가 아닌 경우 로그인 페이지로 이동하기
 */
const Home = ({ loginState, setLoginstate }) => {
  const navigate = useNavigate();

  // e 안 쓰는 버튼 함수
  const goToProduct = () => {
    navigate("/product?name=value");
    // 이동할 경로를 넣어 줌
  };

  const handleLogin = () => {
    if (loginState) {
      setLoginstate(false);
    } else {
      navigate("/login");
    }
    // loginState(true)? navigate('/'):navigate('/login')
  };
  /*
  1. 마이페이지 버튼 클릭 시, 로그인 완료 마이페이지로 이동하기
      단, 로그인 상태가 아닌 경우 '로그인 페이지'로 이동하기
  */
  const gotoMypage = () => {
    if (loginState) {
      navigate("/user");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <h1 className="blinking">ANYWAY NOW IM HANGRY</h1>
      <Link to={"/about"}>About 페이지로 이동하기</Link>
      <button onClick={goToProduct}>상품페이지로 이동하기</button>
      {/* <Link to={'/login'}>로그인</Link> */}
      {/* 로그인 state 값을 알고 있어야 로그아웃 글자로 전환 가능 */}
      {/* <Link to={'/user'}>\(0^◇^0)/</Link> */}
      <button onClick={gotoMypage}>\(0^◇^0)/</button>
      <hr />
      <button onClick={handleLogin}>
        {loginState ? "로그아웃" : "로그인"}
      </button>
      {/* 로그인이 되어 있는 상태로 나오니까 로그아웃이 나와야 됨 */}
    </div>
  );
};

export default Home;
