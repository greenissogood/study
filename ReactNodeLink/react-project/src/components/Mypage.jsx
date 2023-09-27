import React, { useState } from "react";
import { Table, Button, Form, Modal, Row, Col } from "react-bootstrap";
import { useRef } from "react";
import axios from "../axios";

const MyPage = () => {
  const [show, setShow] = useState(false);

  const PwRef1 = useRef(); //현재 비번
  const PwRef2 = useRef(); //바꿀 비번
  const btnRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 세션 --> 아이디 필요
  const userObj = JSON.parse(sessionStorage.getItem("user"));

  /** 비번 수정 함수*/
  const changePWD = () => {
    console.log("changePW function", PwRef2.current.value);
    axios
      .post("/user/changePw", {
        id: userObj.id,
        currentPw: PwRef1.current.value,
        changePw: PwRef2.current.value,
      })
      .then((res) => {
        console.log(res);
        if (res.data.msg === "success") {
          // 비번 수정 성공
          handleClose();
          btnRef.current.innerText = "비밀번호 변경 완료";
          btnRef.current.disabled = true;
        } else if (res.data.msg === "failed") {
          // 사용자 잘못 입력
          alert("비밀번호를 다시 확인해 주세요.");
          handleClose();
        } else {
          // 서버 문제
          alert("죄송합니다. 다시 시도해 주세요.");
          handleClose();
        }
      });
  };

  /** 개인정보 수정 함수*/
  const handleModify = () => {
    console.log("handle modify function");
    axios
      .post("/user/modify", {
        id: userObj.id,
        new_name: nameRef.current.value,
        new_email: emailRef.current.value,
      })
      .then((res) => {
        console.log(res);
        if (res.data.msg === "success") {
          // 만약에 내가 받은 데이터의 메시지가 석세스면
          sessionStorage.setItem(
            "user",
            JSON.stringify({
              // 세션스토리지의 아이템을 다시 세팅해 줄 겁니다.
              id: sessionStorage.getItem("user").id,
              user_name: nameRef.current.value,
              email: emailRef.current.value,
            })
          );

          alert("정보가 변경되었습니다.");
          window.location.href = "/link";
        } else {
          alert("변경 실패");
          window.location.href = "/mypage";
        }
      });
  };

  return (
    <div className="main-body">
      <h1>Mypage</h1>
      <div align="center">
        <Table striped="columns">
          <tbody align="center">
            <tr>
              <td>ID</td>
              <td>{userObj.id}</td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <div className="d-grid gap-2">
                  <Button
                    variant="light"
                    size="sm"
                    onClick={handleShow}
                    ref={btnRef}
                  >
                    {" "}
                    비밀번호 변경
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <Form.Control
                  type="text"
                  size="sm"
                  defaultValue={userObj.user_name}
                  ref={nameRef}
                />
              </td>
            </tr>
            <tr>
              <td>email</td>
              <td>
                <Form.Control
                  type="text"
                  size="sm"
                  defaultValue={userObj.email}
                  ref={emailRef}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col>
            <Button variant="info" size="lg" onClick={handleModify}>
              수정완료
            </Button>
          </Col>
        </Row>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>비밀번호 수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>현재 비밀번호</Form.Label>
          <Form.Control type="password" size="sm" ref={PwRef1} />
          <Form.Label>바꿀 비밀번호</Form.Label>
          <Form.Control type="password" size="sm" ref={PwRef2} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={changePWD}>
            비밀번호 수정
          </Button>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyPage;
