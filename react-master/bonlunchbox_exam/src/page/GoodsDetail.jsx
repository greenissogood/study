import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const GoodsDetail = () => {
  //상품정보를 저장하는 state를 정의하시오.
  //state명: good
  const [good,setGood] = useState(null)
  // useState 쓸 때는 무조건 대괄호인 거 기억하라 ★

  //GoodsItem에서 넘겨받은 상품id를 저장하는 변수를 정의하시오.
  // useParams() 활용
  const {id} = useParams()
  console.log('넘겨받은 상품 id:', id);
  // console 창이랑 주소창 menu/id 가 똑같이 나오는지 확인하면 됨

  //상품리스트에서 특정 상품정보만 JSON서버로부터 가져온 후, good state에 저장하는
  //getGoods함수를 구현하시오.
  //요청URL : http://localhost:3004/goods_list/상품id
  const getGoods = async()=>{
    let response = await axios.get(`http://localhost:3004/goods_list/${id}`)
    console.log(id+'번 상품 정보:', response.data);
    
    // 받아온 상품 정보를 good state에 저장해 주기 --> 업데이트 되게 해 주려고.
    setGood(response.data)
    
  }

  //useEffect()를 이용하여 getGoods 함수를 한 번만 호출하시오.
  // 첫 번째 인자로 함수, 두 번째 함수 대괄호 --> 대괄호 빼면 계속 수행이 일어남
  // useEffect는 한 번만 굴러가게 하니까
  useEffect(()=>{
    getGoods()
  },[])

  return (
    <div className="goods-detail-box">
      {/* good state에 정보가 있을 때 property에 접근하도록 조건부 렌더링 처리 */}
      {good ? (
      <><div className="goods-detail-box-thumb">
        <img src={good.detail.sub_thumb} alt="이미지" />
      </div>
      <div className="goods-detail-box-info">
        <div className="goods-detail-title">
          <div className="goods-icon">
            {/* 해당 상품이 new인지 best인지 조건부 렌더링을 통해 출력하시오. */}
            {good.new?
            <em className="goods-new">new</em>:
            good.best?
            <em className="goods-best">best</em>:''}
          </div>
          <p className="goods-detail-name">{good.name}</p>
          <p className="goods-detail-txt">{good.detail.txt}</p>
          <div className="goods-detail-price-box">
            <strong>{good.price}</strong>
            <span>원</span>
          </div>
        </div>
        <div className="goods-detail-summary">{good.detail.summary}</div>
      </div></>)
      :
      '데이터 불러오는 중'}
    </div>
  );
};

export default GoodsDetail;
