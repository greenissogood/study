import React, { useEffect } from 'react'
import axios from 'axios'

// 데이터 (db) 정보를 가져오려고 사용

const Posts = () => {

    // 전체 데이터 요청하는 함수
    // axios 사용하려면 async 넣어야 됨
    const getPostAll = async () =>{
        
        let response = await axios('http://localhost:3004/posts')
        console.log(response.data);
        // 콘솔창 안에 data를 가지고 온다고
    }

    // 하나의 데이터를 요청하는 함수
    const getPost = async ()=>{
        
        let response = await axios('http://localhost:3004/posts/1')
        console.log(response);
    }
    // 한 번만 가져올 거니까 한 번만 실행될 수 있게 useEffect
    useEffect(()=>{
        console.log('데이터 받아오기:');
        // getPostAll()
        getPost()
    },[])

  return (
    <div>Posts</div>
  )
}

export default Posts