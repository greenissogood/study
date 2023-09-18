import React from 'react'
import { Card } from 'react-bootstrap'
import Header from './Header'
import {Routes, Route} from 'react-router-dom'
import Main from './Main'
import Join from './Join'
import Login from './Login'
import MemberList from './MemberList'
import Delete from './Delete'
import Mypage from './Mypage'

const Body = () => {
  return (
    <div>
      <Card>
        {/* application의 Header */}
        <Header/>

        {/* Application의 Main Content */}
        <Card.Body>
          <Routes>
            <Route path='/link' element={<Main/>}></Route>
            {/* 만약에 누군가가 메인을 찾는다면 element로 메인을 줄게요 */}
            <Route path='/join' element={<Join/>}></Route>
            {/* 만약 join이라면 join을 들고 오고 */}
            <Route path='/login' element={<Login/>}></Route>
            {/* 로그인 컴포넌트라면 로그인을 들고 올 거예요 */}
            <Route path='/memberlist' element={<MemberList/>}></Route>
            <Route path='/delete' element={<Delete/>}></Route>
            <Route path='/mypage' element={<Mypage/>}></Route>
            
          </Routes>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Body