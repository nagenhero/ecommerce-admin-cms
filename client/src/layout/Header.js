

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { toggleShowSideMenu } from "../pages/System-state/SystemSlice";
export const Header =() =>{
  const dispatch =useDispatch();
  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Navbar.Brand href="#">
          {""}<i class="fa-solid fa-bars" onClick={()=>dispatch(toggleShowSideMenu())}></i> admin cms
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;