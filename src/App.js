import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import data from './data';
import { useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';

function App() {
 let [shoes] = useState(data);
 let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Cart</Nav.Link>
          <Nav.Link href="#pricing">Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    
      <Routes>
          <Route path = "/detail/:id" element={<Detail shoes = {shoes}/>}/>
          <Route path="/" element = {
            <div>
              <div className='main-bg'></div>
                  <div className="container">
                  <div className="row">
                    {shoes.map((a,i) => {
                        return <Card shoes={shoes[i]} i={i + 1} />;
                      })
                    }
              </div>
              </div>
            </div>  
          }/>
          <Route path="*" element={<div>없는 페이지임</div>}/>
          <Route path='/about' element ={<About/>}>
              <Route path='member' element={<div>멤버들</div>}/>
              <Route path='location' element={<div>회사위치</div>}/>
          </Route>
      </Routes>
      
      
      {/* <button onClick={() => {navigate('/detail')}}>이동버튼</button> */}
  </div>
  )
}

function About(){
  return (
    <div>
      어바웃페이지임
      <Outlet></Outlet>
    </div>
   
  )
}


function Card(props){
  return (
    <div className="col-md-4">
      <img src= {"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg" }width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
  </div>
  )
}

export default App;
