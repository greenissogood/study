import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import logger from 'redux-logger'
// counterReducer 라는 이름으로 받아와서 밑에서 연결

/*
    store : state, reducer, 내장함수 등을 관리하는 역할
    하나의 어플리케이션에 하나의 store만 생성

    configureStore() : store를 생성하는 함수

 */

export default configureStore({
    reducer:{
        counter:counterReducer
        // (state)=>state.counter.count 카운터에 접근 가운데는 reducer 키
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})
