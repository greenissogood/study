import React from 'react'
import { Navigate } from 'react-router-dom'
import GoodsDetail from '../page/GoodsDetail'

// 로그인 상태에 따라 다른 페이지로 이동되도록 구현하시오.
// 로그인 상태 : 상품상세페이지로 이동
// 비로그인 상태 : 로그인페이지로 이동


// 사용만 값이 어떤 상태인지 확인을 해서 실행만 되게, return이 되게
const PrivateRoute = ({authenticate}) => {
  return authenticate ? <GoodsDetail/>: <Navigate to ={'/login'}/>
}

export default PrivateRoute