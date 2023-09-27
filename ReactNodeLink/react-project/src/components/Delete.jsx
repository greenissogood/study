import axios from '../axios'
import React, { useEffect, useRef, useState } from 'react'
import {Form, Button} from 'react-bootstrap'

const Delete = () => {
  const idRef = useRef()
  const pwRef = useRef()

  const [userData, setUserData] = useState()

  // 회원 탈퇴하는 함수
  const handleDelete = (e) =>{
    e.preventDefault()
    console.log('delete function',idRef.current.value);
    axios
    .post('/user/delete',{
      id : idRef.current.value,
      pw : pwRef.current.value
    })
    .then(res=>{
      console.log('백엔드에서 넘어온 데이터', res.data);
      // 만약에 내가 받아온 데이터의 메시지가 석세스라면
      if(res.data.msg ==='success'){
        sessionStorage.setItem('user', null)
        // 세션은 f12 눌러서 application에서 key value보면 됨
        // 세션의 user를 null로 바꿔준다
        alert('탈퇴 성공')
        window.location.href='/link'
      }else{
        alert('아이디 혹은 비밀번호를 확인해 주세요.')
        window.location.href='/delete'
      }
    })
  }


  return (
    <div>
      <h1>회원탈퇴</h1>
      <Form onSubmit={handleDelete} >
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter id" ref={idRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Delete