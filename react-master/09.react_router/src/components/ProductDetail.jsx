import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    // const params = useParams() // {pro_no:value}
    // console.log(params.pro_no);

    // useParams()는 URL 파라미터로부터 넘겨받은 값을 객체로 반환해 주기 때문에
    // {파라미터1, 파라미터2, ...} = useParams()로 받아서 처리

    // useParams는 값이 객체인데 pro_no으로 받아오겠다
    const {pro_no} = useParams()

  return (
    <div>
        <h1>ProductDetail</h1>
        <p>상품번호 : {pro_no}</p>
    </div>
  )
}

export default ProductDetail