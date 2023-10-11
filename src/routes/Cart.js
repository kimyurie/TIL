import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { 이름변경, 나이증가 } from "../store/userSlice";
import { addCount } from "../store/store";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <>
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
