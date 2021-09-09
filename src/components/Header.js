import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'



function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand to="/home">Header</Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header
