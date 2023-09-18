import React from "react";
import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const idRef = useRef()
    const pwRef = useRef()

    const Navigate = useNavigate()

  const submitLogin = (e) => {
    if (idRef.current.value === "test" && pwRef.current.value === "1234") {
      console.log("로그인 성공:", idRef.current.value ,pwRef.current.value );
      alert("로그인 성공!");
      Navigate('/link')
    } else {
        idRef.current.value =''
        pwRef.current.value =''
      alert("아이디 혹은 비밀번호를 확인해 주세요.");
    }

    e.preventDefault()
  };

  return (
    <div>
      <Form>
        <h1>로그인</h1>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" ref={idRef}/>
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
