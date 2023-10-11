import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : { 
    // state 수정해주는 함수 만들기
        이름변경(state){
            state.name = 'park'
        },

        // 가끔은 +10 하고 가끔은 +100 하고싶으면
        나이증가(state, action){
            state.age += action.payload;
        }
    }
})

export let {이름변경, 나이증가} = user.actions

export default user;


