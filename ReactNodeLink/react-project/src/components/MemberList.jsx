import axios from "../axios";
import React, { useEffect, useState } from "react";

const MemberList = () => {
  // 화면에 바로바로 변화될 값이라서 state 사용
  const [list, setList] = useState([]);

  // 화면이 띄워졌을 때
  // 화면이 렌더링 됐을 때, 실행될 react Hook
  useEffect(() => {
    axios
      .post("/user/select")
      // 내가 보내 줄 데이터 없음 받아오기만 함
      .then((res) => {
        console.log(res.data.list);
        setList(res.data.list);
      });
  }, []);

  return (
    <div>
      <h1>회원정보</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item,idx) => (
            <tr key={item.id+idx}>
              <td>{item.id}</td>
              <td>{item.user_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
