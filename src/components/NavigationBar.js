import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/askmeai_logo.png'
function NavigationBar() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar collapseOnSelect expand="lg"style={{background: '#04050A'}}>
      <Container>
        <Navbar.Brand href="/HomePage"  style={{color: 'white'}}>
            <img src={logo} width='40px' alt=''/>{' '}
            Ask Me AI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link href="/HomePage" style={{color: window.location.pathname === "/HomePage" ? '#2CF6B3' : 'white'}}>Home</Nav.Link>
            <Nav.Link href="/Chat" style={{color: window.location.pathname === "/Chat" ? '#2CF6B3' : 'white'}}>Chat</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link style={{color: 'white'}} onClick={() => navigate('/ask-me-ai')}>Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationBar
