import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './pages/NavbarComponent.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navStyle">
      <Container>
        <Navbar.Brand href="#home" className='navLogoStyle'>Weather <span>Sprint</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='alignment'>
          <Nav className="ml-auto favStyle">
            <Nav.Link as={Link} to='/' className='favColor' >Favorites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
