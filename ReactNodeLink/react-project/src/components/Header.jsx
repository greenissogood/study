import React from "react";
import { Card, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Card.Body>
      <Nav variant="tabs">
        <Link to='/link'>
          <Button variant="light">Main</Button>
        </Link>

        {/* 비회원 권한 */}
        <Link to='/join'>
          <Button variant="light">회원가입</Button>
        </Link>
        <Link to='/login'>
          <Button variant="light">Login</Button>
        </Link>

        {/* 회원 권한 */}
        <Link to='/mypage'>
          <Button variant="light">Mypage</Button>
        </Link>
        <Link to='/memberlist'>
          <Button variant="light">회원 검색</Button>
        </Link>
        <Link to='/delete'> 
          <Button variant="light">회원 탈퇴</Button>
        </Link>
        <Link to='#'>
          <Button variant="light">Logout</Button>
        </Link>
      </Nav>
    </Card.Body>
  );
};

export default Header;
