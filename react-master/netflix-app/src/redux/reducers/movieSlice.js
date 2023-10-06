import { createSlice } from "@reduxjs/toolkit";

// 이 안에는 세 개의 값을 적게 되어 있음 
// 원랜 다 따로 적어야 했는데, 툴킷으로 객체안에 한번에 정의할 수 있게 바뀜
const movieSlice = createSlice({
    name:'movie',
    initialState:{
        popularMovies:[],
        topRatedMovies:[],
        upcomingMovies:[],
        genreList:[]
    },
    reducers:{
        // 액션 함수
        initData:(state,action)=>{
            console.log('[movie slice.js]: ',action);
            let {payload} = action
            
            // let {type,payload} = action
            // action은 type과 payload로 이루어져 있음
            // 여기서는 payload만 필요하니까 payload만 써 줘도 됨
            console.log('[movie slice.js]: ',payload);

            state.popularMovies = payload.popular.results
            state.topRatedMovies = payload.topRated.results
            state.upcomingMovies = payload.upcoming.results
            state.genreList = payload.genre.genres
            // 배열이 list에 저장
        }

    }
})

export const MovieReducerActions = movieSlice.actions;
export default movieSlice.reducer