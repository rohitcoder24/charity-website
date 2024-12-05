import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth0 } from "@auth0/auth0-react";



const Navbar2 = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <>  
    <Navbar expand="lg" className="nav2 bg-white shadow " sticky="top" data-spy="affix"  data-offset-top="197" >
      <Container> 
        <Navbar.Brand href="#home"><img src="img/logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbav bg-white">
          <Nav className="ms-auto font-nav bg-white sticky-top">
          <NavLink to={"/Home"} className="nav-link me-4 mt-2 font-nav bg-white" aria-current="page">HOME</NavLink>
          <NavLink to={"/Gall"} className="nav-link me-4 mt-2 font-nav bg-white" aria-current="page">GALLERY</NavLink>
          <NavLink to={"/About"} className="nav-link me-4 mt-2 font-nav bg-white" aria-current="page">ABOUT</NavLink>
          <Nav.Link className="nav-link me-4  font-nav bg-white" aria-current="page">
          <NavDropdown title="EVENT">
              <NavDropdown.Item href="#action/3.1"  >
            <NavLink  to={"/Event"}  className=' text-decoration-none text-dark' >EVENT</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
            <NavLink   to={"/Eventdeli"}  className=' text-decoration-none text-dark' >EVENT DETAILS</NavLink>
               
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>  
          <Nav.Link className="nav-link me-4  font-nav bg-white" aria-current="page">
          <NavDropdown title="PAGES">
            <NavDropdown.Item href="#action/3.1">
            <NavLink  to={"/Element"}  className=' text-decoration-none text-dark' >ELEMENT</NavLink>
            </NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.2">
              <NavLink to={"Donation"}  className=' text-decoration-none text-dark'>
                DONATION
              </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Link> 
          <Nav.Link className="nav-link me-4  font-nav bg-white" aria-current="page">
          <NavDropdown title="BLOG">
            <NavDropdown.Item href="#action/3.1" > 
            <NavLink className="text-decoration-none text-dark" to={"/Blog"}>
              BLOG 
              </NavLink>
              </NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.2">
              <NavLink className="text-decoration-none text-dark" to={"Blog-Details"}>
              BLOG DETAILS
              </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Link> 
          <NavLink to={"/contect"} className="nav-link me-4 mt-2 font-nav bg-white" aria-current="page">CONTECT</NavLink>

            <Nav.Link className='me-4 font-nav bg-white mt-2' href="#link">
              {
                isAuthenticated && <p>{user.name}</p>
              }
              
            </Nav.Link>
            
           {
             isAuthenticated ? ( 
             <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>  Log Out
    </button>
    ):(
    <button onClick={() => loginWithRedirect()}>Log In</button>
  )}
     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbar2