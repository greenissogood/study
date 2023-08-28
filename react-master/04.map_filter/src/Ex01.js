import React, { useState } from 'react'
import memberList from './data/member.json'

const Ex01 = () => {
  console.log(memberList);
  
  const [members, setMembers] = useState(memberList)
  return <div>
    {members.map((member) => (
      <p key={member.id}>
        <h4>이름 :{member.name}</h4>
        <br></br>
        <h4>업무 :{member.task}</h4>
      </p>
    ))}
  </div>
}

export default Ex01
