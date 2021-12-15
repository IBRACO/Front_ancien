import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Protected } from ".";


function Cnav() {
    return (
        <>
          <Navbar style={{margin:80}}
            expand="lg"
            fixed="top"
            collapseOnSelect
            bg="dark"
            variant="dark"
          >
            <Container>
              {/* <Navbar.Brand>
                <Link to="/">Home</Link>
              </Navbar.Brand> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Protected role="2">
                    <Nav.Link as="div">
                      <Link to="/Login">Login</Link>
                    </Nav.Link>
                    <Nav.Link as="div">
                      <Link to="/Register">Register</Link>
                    </Nav.Link>
                  
                  <Nav.Link as="div">
                    <Link to="/CategoryProducts/1">Category Products</Link>
                  </Nav.Link>
                  <Nav.Link as="div">
                    <Link to="/ProductDetail/1">Product Detail</Link>
                  </Nav.Link>
                  </Protected>
  
                  
  
                </Nav>
                
         
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      );
    }


export default Cnav
