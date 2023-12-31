import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { addItem } from "../store/store";
import { useDispatch } from "react-redux";

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  let [box, setBox] = useState(true);
  let [num, setNum] = useState("");
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState('');
  let dispatch = useDispatch();


  useEffect(() => {
    let a = setTimeout(() => {
      setBox(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요");
    }
  }, [num]);

  useEffect(() => {
    setFade2('end')
    return () => {
      setFade2('')
    }
  }, [])


  // 2. 현재 페이지에서 보이는 상품 id 가져와서
  // 3. localStorage에 watch 항목에 있던 []에 추가
  useEffect(() => {
    let 꺼낸거 = localStorage.getItem('watched');
    // 꺼낸거 json 형태 -> array 형태로
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(찾은상품.id)
    

    // 중복 제거
    // 상품 id가 이미 []에 있으면 추가하지 말아주세요
    // Set은 array 와 같이 중복을 알아서 제거해주는 array
    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)

    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, [])


  return (
    <div className={"container start " + fade2}>
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
        <button className="btn btn-danger" onClick={() => {
          dispatch(addItem({id : 1, name : 'Red Knit', count : 1} ))
        }}>주문하기</button>
      </div>
      {box == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }) {
  let [fade, setFade] = useState('')

  useEffect(() => {
    setTimeout(() => {setFade('end')}, 100)
    return () => {setFade('')}
  }, [tab])

  return (
    // <div className='start end'>
    <div className= {'start ' + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  )
}

export default Detail;
