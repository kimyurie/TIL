import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import data from './data';
import { useState } from 'react';

function App() {
 let [shoes] = useState(data);

  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <div className='main-bg'></div>
    <div className="container">
        <div className="row">
          {/* <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/logo192.png'}width="80%" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div> */}
          <Card shoes = {shoes[0]} i = {1}/>
          <Card shoes = {shoes[1]} i = {2}/>
          <Card shoes = {shoes[2]} i = {3}/>
        </div>
      </div>
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
