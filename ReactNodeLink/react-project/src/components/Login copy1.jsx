import React from "react";
import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const Navigate = useNavigate();

  /** 로그인 기능을 해 주는 함수 */
  const submitLogin = (e) => {
    e.preventDefault();
    console.log('value:', idRef.current.value, pwRef.current.value);

    // Case : 데이터를 따로 객체고 보관하지 않고 바로 axios로 보내 주기
    // 프로젝트 시, 넘겨 줘야 하는 데이터의 그룹이 2 개 이상이면 따로 객체화 => useEffect
    // 넘겨 주어야 하는 데이터의 그룹이 1 개라면 바로 보내 주는 방법
    if (idRef.current.value === "test" && pwRef.current.value === "1234") {
      console.log("로그인 성공:", idRef.current.value, pwRef.current.value);
      alert("로그인 성공!");
      Navigate("/link");
    } else {
      idRef.current.value = "";
      pwRef.current.value = "";
      alert("아이디 혹은 비밀번호를 확인해 주세요.");
    }
  };

  return (
    <div>
      <Form>
        <h1>로그인</h1>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" ref={idRef} />
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef} />
        </Form.Group>

        <div>
          <Button variant="info" type="submit" onClick={submitLogin}>
            Submit
          </Button>
          {/* variant 어쩌고 색 바꿔 주는 것 */}
        </div>
      </Form>
    </div>
  );
};
export default Login;
