import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { 이름변경, 나이증가 } from "../store/userSlice";
import { addCount } from "../store/store";
import { memo, useMemo, useState } from "react";

// 꼭 필요할 때만 child 컴포넌트 재랜더링 하도록
let Child = memo(function(){
  console.log('재랜더링됨')
  return <div>자식임</div>
})
// => child로 전송되는 props가 변할때만 재랜더링

// function 함수(){
//   return 반복문10억번돌린결과
// }

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);
  // // useMemo 사용 시 컴포넌트 로드시 1회만 실행됨 (useEffect와 비슷)
  // let result = useMemo(() => {return 함수()}, [])

  return (
    <>
      <Child/>
      <button onClick={() => {setCount(count+1)}}>child재랜더링버튼</button>
      <p>{state.user.name}의 장바구니</p>
      나이 : {state.user.age}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button onClick={() => {
                    dispatch(addCount(state.cart[i].id))
                  }}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button
        onClick={() => {
          dispatch(이름변경());
        }}
      >
        이름변경버튼
      </button>
      <button onClick={() => {
        dispatch(나이증가(100))
      }}>나이+버튼</button>
    </>
  );
}

export default Cart;
