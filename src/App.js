import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import data from "./data";
import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import Detail from "./routes/Detail";
// import Cart from "./routes/Cart";
// Detail, Cart 컴포넌트가 필요해지면 import 해주세요 => 첫페이지 로딩 속도 향상시킴
const Detail = lazy(() => import('./routes/Detail'))
const Cart = lazy(() => import('./routes/Cart'))

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  // 상세페이지 들어가면 현재 페이지에 있는 상품 id를 
  // localStorage에 저장되게

  // 1. 누가 상세페이지 접속하면
  // 2. 현재 페이지에서 보이는 상품 id 가져와서
  // 3. localStorage에 watch 항목에 있던 []에 추가
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]))
  }, [])



  // 실시간 데이터 -> sns, 코인거래소 같은데 쓰임
  // react-query로 ajax 요청하는 법
  let result = useQuery(['작명'], ()=>
   axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{ 
      console.log('요청됨')
      return a.data 
    }), {staleTime : 2000}
  )

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/1");
              }}
            >
              Detail1
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/2");
              }}
            >
              Detail2
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading && '로딩중' }
            {result.error && '에러남' }
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/detail/:id" element={
        <Suspense fallback={<div>Detail 컴포넌트 로드중임</div>}>
          <Detail shoes={shoes}/>
        </Suspense>
          } />
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i + 1} />;
                  })}
                </div>
              </div>
            </div>
          }
        />
        <Route path="*" element={<div>없는 페이지임</div>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((결과) => {
              let copy = [...shoes, ...결과.data];
              setShoes(copy);
            })
            .catch(() => {
              console.log("실패함");
            });
        }}
        // fetch('https://codingapple1.github.io/shop/data2.json')
        // .then(결과 => 결과.json()).then((결과) => console.log(결과))
        // }}
      >
        버튼
      </button>

    </div>
  );
}

function About() {
  return (
    <div>
      어바웃페이지임
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
