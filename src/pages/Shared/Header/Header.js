import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {

  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth);
  };
  return (
    
<div>
<Navbar sticky='top' className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">X-Autos Warehous</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>

      {
        user && <>
      <Nav.Link as={Link} to="myitem">Inventory Item</Nav.Link>
      <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
      <Nav.Link as={Link} to="manageitem">Manage Item</Nav.Link>
        </>
      }
      
    </Nav>
    <Nav>    
    <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      {
        user? <button className='text-white bg-dark logout-btn' onClick={logout}>Logout</button>
        :
        <Nav.Link eventKey={2} as={Link} to="login">
        Login
      </Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    
  );
};

export default Header;