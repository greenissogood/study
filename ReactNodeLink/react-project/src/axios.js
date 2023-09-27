import axios from 'axios'

// axios 만들어 주기 -> 괄호 안에 어떻게 만들 건지 특징을 넣어 주면 됨
const instance = axios.create({
    baseURL : 'http://localhost:3001'
})

export default instance;