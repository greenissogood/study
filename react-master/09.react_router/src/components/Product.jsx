import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()

    const goToProductDetail = ()=>{
        navigate('/productDetail2?cate=shirt&size=M&pro_no=1')
    }
  return (
    <div>
    <h1>Product</h1>
    <button onClick={goToProductDetail}>상품 상세페이지로 이동하기</button>
    </div>
  )
}

export default Product