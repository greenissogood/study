import React from "react";
import { Form, Button } from "react-bootstrap";

const Join = () => (
  <div>
    <h1>회원가입</h1>
    <hr />
    <Form>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" />
      </Form.Group>

      {/* 중복체크 칸 길게 d-grid gap mb-3 부트스트랩이 정한 클래스 네임*/}
      <div className="d-grid gap mb-3">
        <Button variant="light">중복체크</Button>
        {/* variant light 색을 연하게 */}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassWord1">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>{" "}
      <Form.Group className="mb-3" controlId="formBasicPassWord2">
        <Form.Label>비밀번호 확인</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>{" "}
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>{" "}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Email Address" />
      </Form.Group>

      {/* 중복체크 칸 길게 d-grid gap mb-3 부트스트랩이 정한 클래스 네임*/}
      <div className="d-grid gap mb-3">
        <Button variant="info" type="submit">회원가입 완료</Button>
        {/* variant 어쩌고 색 바꿔 주는 것 */}
      </div>
    </Form>
  </div>
);

export default Join;
