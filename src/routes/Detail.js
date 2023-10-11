import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  let [box, setBox] = useState(true);
  let [num, setNum] = useState("");
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState('');


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
        <button className="btn btn-danger">주문하기</button>
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
