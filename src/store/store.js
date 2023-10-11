import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice'

let cart = createSlice({ // = useState()
    name : 'cart', // state 이름
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ], // state 값
    reducers : {
      // state 수정 함수
      addCount(state, action){
        let 번호 = state.findIndex((a) => {
          return a.id == action.payload
        })
        state[번호].count++
      },
      addItem(state, action){
        state.push(action.payload)
      }
    }
})


export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
   }
}) 


export let {addCount, addItem} = cart.actions





