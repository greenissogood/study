import React from "react";
import { Card, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  // 세션 스토리지 값 가져오기
  const userObj = JSON.parse(sessionStorage.getItem("user"));
  console.log("userObj", userObj);

  /** 로그아웃 하는 함수 */
  const handleLogout = () => {
    console.log("logout function");

    sessionStorage.setItem("user", null);
    window.location.href = "/link";
  };

  return (
    <Card.Body>
      <Nav variant="tabs">
        <Link to="/link">
          <Button variant="light">Main</Button>
        </Link>

        {userObj == null ? (
          <div>
            {/* 비회원 권한 */}
            <Link to="/join">
              <Button variant="light">회원가입</Button>
            </Link>
            <Link to="/login">
              <Button variant="light">Login</Button>
            </Link>
          </div>
        ) : (
          <div>
            {/* 회원 권한 */}
            <Link to="/mypage">
              <Button variant="light">Mypage</Button>
            </Link>
            <Link to="/memberlist">
              <Button variant="light">회원 검색</Button>
            </Link>
            <Link to="/delete">
              <Button variant="light">회원 탈퇴</Button>
            </Link>
            {/* case 1) 서버에 세션 저장한 경우 = link */}
            {/* <Link to='/user/logout'> */}

            {/* case 1) 브라우저에 세션 저장한 경우 = onclick*/}
            <Button variant="light" onClick={handleLogout}>
              Logout
            </Button>
            {/* </Link> */}
          </div>
        )}
      </Nav>
    </Card.Body>
  );
};

export default Header;
