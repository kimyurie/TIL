import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  let [box, setBox] = useState(true);
  let [num, setNum] = useState('');

  useEffect(() => {
    let a = setTimeout(() => {setBox(false)}, 2000)
    return () => {
      clearTimeout(a)
    }
  }, [])

  useEffect(() => {
    if(isNaN(num) == true){
      alert('그러지마세요')
    }
  }, [num])

  


  return (
    <div className="container">
      <div className="col-md-6">
        <img
          src="https://codingapple1.github.io/shop/shoes1.jpg"
          width="100%"
        />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}원</p>
        <button className="btn btn-danger">주문하기</button>
      </div>
      {
        box == true ? <div className="alert alert-warning">
        2초이내 구매시 할인
      </div> : null
      }
      <input onChange={(e) => {setNum(e.target.value)}}/>
    </div>
  );
}

export default Detail;
