import { Component } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Protected } from ".";
// import Protected  from ".";
import UserContext from '../contexts/UserContext'

class HeaderDev extends Component {

  
  static contextType = UserContext
  logout() {
    const { setUser } = this.context
    setUser(null)
  }

  render() {
    return (
      <>
        <Navbar
          expand="lg"
          fixed="top"
          collapseOnSelect
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Protected noauth>
                  <Nav.Link as="div">
                    <Link to="/Login">Login</Link>
                  </Nav.Link>
                  <Nav.Link as="div">
                    <Link to="/Register">Register</Link>
                  </Nav.Link>
                </Protected>
                <Nav.Link as="div">
                  <Link to="/CategoryProducts/1">Category Products</Link>
                </Nav.Link>
                <Nav.Link as="div">
                  <Link to="/ProductDetail/1">Product Detail</Link>
                </Nav.Link>

                <Protected role="1">
                  <NavDropdown title="User" id="user-nav-dropdown">
                    <NavDropdown.Item as="div">
                      <Link to="/UserAccount">User Account</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="div">
                      <Link to="/UserCart">User Cart</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Protected>

                <Protected role="2">
                  <NavDropdown title="Admin" id="admin-nav-dropdown">
                    <NavDropdown.Item as="div">
                      <Link to="/CategoryManage">Categories Manager</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="div">
                      <Link to="/ProductManage">Products Manager</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="div">
                      <Link to="/CommandManage">Commands Manager</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="div">
                      <Link to="/CustomerManage">Customers Manager</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="div">
                      <Link to="/UserManage">Users Manager</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Protected>
              </Nav>
              <Nav className="ml-auto">
                <Protected>
                  {/* <Link to="/Logout">Logout</Link> */}
                  <Button onClick={this.logout.bind(this)}>Logout</Button>
                </Protected>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export { HeaderDev };
