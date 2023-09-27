import React from "react";
import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import axios from '../axios'

const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();

  /** 로그인 기능을 해 주는 함수 */
  const submitLogin = (e) => {
    e.preventDefault();
    console.log('value:', idRef.current.value, pwRef.current.value);

    // Case : 데이터를 따로 객체고 보관하지 않고 바로 axios로 보내 주기
    // 프로젝트 시, 넘겨 줘야 하는 데이터의 그룹이 2 개 이상이면 따로 객체화 => useEffect
    // 넘겨 주어야 하는 데이터의 그룹이 1 개라면 바로 보내 주는 방법
    axios
    .post('/user/login',{
      id : idRef.current.value,
      pw : pwRef.current.value
    })
    .then(res=>{
      console.log('백엔드에서 넘어온 데이터', res.data);
      if(res.data.msg === 'success'){

        /* 실제 로그인 세션을 이용하는 경우에는 server 단에 있는
        session을 사용하는 게 보안상 좋음
        => 그러나 보안이 중요하지 않은 간단한 데이터를 저장해야 할 때
            - front 단에 있는 sessionStorage, localStorage를 사용할 수 있음
               * 지금은 로그인으로 사용 방법의 예를 보여 주는 것 뿐,
                  실제 로그인 세션은 back-end 세션으로 사용하세요.
                    => 프로젝트 ? Ok, 현업에서 사용 X

          1) localStorage
          - 브라우저를 꺼도 데이터가 남아있음
              ex) 7일간 안 보기 눌렀을 때 안 뜨는 거, 팝업창, 자동 로그인 하시겠습니까?, 장바구니

              - localStorage 등록 : localStorage.setItem('key','value')
              - localStorage 아이템 읽기 : localStorage.getItem('key')
              - localStorage 값 삭제 : localStorage.removeItem('key')
          
          2) sessionStorage
          - 브라우저를 끄면 날아가지만, 페이지 안에는 남아있음
          - 로그인 기능 (front만 있을 때) --> 프론트엔드 하고 싶을 때 로그인 이용하면 됨
          ex) 로그인하고 나면 블로그나 이런 거 다 볼 수 있는데 끄면 로그인이 풀린다는 말 같음.

              - sessionStorage 등록 : sessionStorage.setItem('key','value')
              - sessionStorage 아이템 읽기 : sessionStorage.getItem('key')
              - sessionStorage 값 삭제 : sessionStorage.removeItem('key')
         */
        
        // 저장소에 객체 저장하는 방법
        sessionStorage.setItem('user', JSON.stringify(res.data.user));

        alert('로그인 성공 🪸🪸🪸🪸')
        window.location.href='/link'
      }else{
        alert('아이디 혹은 비밀번호를 확인해 주세요.')
        window.location.href='/login'
      }
    })
    
    }
    
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
