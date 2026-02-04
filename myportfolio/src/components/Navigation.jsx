import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
export default function Navigation() {
  return (
    <div>
    <Navbar bg="dark" variant="dark" sticky="top" className="shadow-sm py-3">
    <Container className="d-flex justify-content-between align-items-center">
      <Navbar.Brand href="#home" className="fw-bold fs-4 m-0">
        <span className="text-primary">DEV</span>PORTFOLIO
      </Navbar.Brand>
      <Nav className="flex-row gap-3 gap-md-4">
        <Nav.Link href="#home" className="text-white opacity-75 px-1 px-sm-2">Home</Nav.Link>
        <Nav.Link href="#projects" className="text-white opacity-75 px-1 px-sm-2">Projects</Nav.Link>
        <Nav.Link href="#contact" className="text-white opacity-75 px-1 px-sm-2">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </div>
  )
}
