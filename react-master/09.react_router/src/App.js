import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ProductDetail2 from './components/ProductDetail2';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import User from './components/User';
import Posts from './components/Posts';

function App() {

  const [loginState, setLoginstate] = useState(false)

  // loginState 값이 업데이트 되었을 때 로그인 상태값 출력
  useEffect(()=>{
    console.log('로그인 상태:', loginState);
  },[loginState])

  // 로그인 상태에서 접근할 수 있는 페이지는 privateRoute를 만들어서 관리
  // <Navigate to ='이동할 경로'/>
  // button 아니고 Link일 때 활용

  // 로그인 안 한 상태에서는 마이페이지 못 가게 해야만 갈 수 있게
  const PrivateRoute = () =>{
    return loginState ? <User/>: <Navigate to ='/login'/>
  }

  return (
   <Routes>
    {/* home에서 값을 받아서 로그인 로그아웃이 나오게 */}
    <Route path='/' element={<Home loginState={loginState} setLoginstate={setLoginstate}/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login setLoginstate={setLoginstate}/>}/>
    <Route path='/user' element={PrivateRoute()}/>

    {/* Product 컴포넌트로 이동되도록 Route 컴포넌트 생성하기 */}
    <Route path='/product' element={<Product/>}/>

    {/* URL 파라미터 형식으로 Route 구성하기 */}
    <Route path='/product/:pro_no' element={<ProductDetail/>}/>
    {/* http://localhost:3000/product/ 뒤에 숫자를 넣어 주면 상세페이지가 넘어 감 */}
    {/* pro_no가 상세페이지 번호 */}

    <Route path='/ProductDetail2' element={<ProductDetail2/>}/>
    <Route path='/User' element={<User/>}/>
    
    {/* axios를 이용하여 json-server 데이터 요청하는 실습  */}
    <Route path='/post' element={<Posts/>}/>

   </Routes>
  );
}

export default App;
