import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    // return(
    //     <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
    //         <li><Link to={'/'}>Home</Link></li>
    //         <li><Link to={'about'}>About</Link></li>
    //         <li><Link to={'contact'}>Contact</Link></li>
    //         <li><Link to={'yankee'}>Yankee</Link></li>
    //     </ul>
    // )
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as = {Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to="/characters/">Characters</Nav.Link>
            <Nav.Link as = {Link} to="/about/">About</Nav.Link>
            <Nav.Link as = {Link} to="/favorites/">Favorites</Nav.Link>
    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;
