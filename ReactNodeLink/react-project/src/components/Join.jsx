import React from "react";
import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../axios";
import { useState } from "react";
import { useEffect } from "react";

const Join = () => {
  console.log("어디갓어");
  const idRef = useRef();
  const pwRef = useRef();
  const pw2Ref = useRef();
  const nameRef = useRef();
  const addRef = useRef();
  const spanRef = useRef();
  const span2Ref = useRef();

  const [text, setText] = useState();
  const [color, setColor] = useState(); //백틱으로 사용할 때 씀
  const [userData, setUserData] = useState({});

  // const checkId는 이러한 함수다
  /** ID의 중복 체크를 해 주는 함수 */
  const checkId = () => {
    console.log("사용자 입력 아이디 : ", idRef.current.value);
    // 값이 지금 value에 들어있으니까 .value

    // 사용자가 ID input 안에 값을 넣었는가? 확인해야 됨.
    // 만약에 id 안에 값이 비어있지 않다면 DB 연결을 해 주겠다.
    if (idRef.current.value !== "") {
      // node로 데이터 전송 시작
      // 비동기로 접근해도 될까?
      axios
        .post("/user/checkId", {
          id: idRef.current.value,
          // 데이터를 보냈고 user.js에서 받아 줘야 됨
        })
        .then((res) => {
          console.log("중복체크 결과:", res.data.result);

          if (res.data.result === "uniq") {
            idRef.current.disabled = true;
            // 사용할 수 있다면 더이상 수정할 수 없도록 만들어 줌
            spanRef.current.style = "color:gray";
            setText("사용 가능한 아이디입니다.");
          } else {
            idRef.current.value = "";
            idRef.current.focus();
            spanRef.current.style = "color:red";
            setText("이미 존재하는 아이디입니다.");
          }
        });
    }
  };

  /** 회원가입 기능을 하는 함수 */
  const handleJoin = (e) => {
    e.preventDefault();
    console.log("handel join function", nameRef.current.value);
    // 페이지 못 넘어가게 막아 주려고 썼다고 함
    console.log("handle join function");
    setUserData({
      id: idRef.current.value,
      pw: pwRef.current.value,
      name: nameRef.current.value,
      email: addRef.current.value,
    });
  };
  /** userData의 값에 변화가 있을 때 */
  useEffect(() => {
    // 조건 1) 첫 페이지 렌더링 제외
    if (userData.id !== undefined) {
      // 조건 2) 비번 1, 비번 2가 다른 경우 제외
      if (pwRef.current.value === pw2Ref.current.value) {
        // 회원가입 데이터 전송 시작!
        axios
          .post("/user/join", {
            userData: userData,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.msg === "success") {
              alert("환영합니다");
              window.location.href = "/link";
            } else {
              alert("다시 확인해 주세요.");
              window.location.href = "/join";
            }
          });
      } else {
        // 비번이 다른 경우
        console.log("비번이 다르다");
        span2Ref.current.style = "color:red";
        span2Ref.current.innerText = "비밀번호가 일치하지 않습니다!";
      }
    }
  }, [userData]);
  return (
    <div>
      <h1>회원가입</h1>
      <hr />
      <Form onSubmit={handleJoin}>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" ref={idRef} />
        </Form.Group>
        {/* <div style= {{color:'red', fontSize:'15px'}}>
          {text}
        </div> */}
        {/* 중복체크 칸 길게 d-grid gap mb-3 부트스트랩이 정한 클래스 네임*/}
        <div className="d-grid gap mb-3">
          <Button variant="light" onClick={checkId}>
            중복체크
          </Button>
          <span ref={spanRef} style={{ color: { color } }}>
            {text}
          </span>
          {/* variant light 색을 연하게 */}
        </div>
        <Form.Group className="mb-3" controlId="formBasicPassWord1">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            ref={pwRef}
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicPassWord2">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            ref={pw2Ref}
          />
        </Form.Group>{" "}
        <span ref={span2Ref}></span>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" ref={nameRef} />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email Address"
            ref={addRef}
          />
        </Form.Group>
        {/* 중복체크 칸 길게 d-grid gap mb-3 부트스트랩이 정한 클래스 네임*/}
        <div className="d-grid gap mb-3">
          <Button variant="info" type="submit">
            회원가입 완료
          </Button>
          {/* variant 어쩌고 색 바꿔 주는 것 */}
        </div>
      </Form>
    </div>
  );
};

export default Join;
