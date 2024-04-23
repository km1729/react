import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Container, Row, Col  } from 'react-bootstrap';
import cat from './img/cat.jpg';
import { useState } from "react";
import data from './data'


function App() {

  let  [shoes ] = useState(data);
  console.log(shoes[0].title);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Kaycee</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     <div className="main-bg" style={ {backgroundImage: 'url('+cat+')'} }></div>
     <div className="Container">
      <Row>
        <Col>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
        <h4>{shoes[0].title}</h4>
        <p>{shoes[0].price}</p>
        </Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
     </div>
    </div>
    
  );
}

export default App;
