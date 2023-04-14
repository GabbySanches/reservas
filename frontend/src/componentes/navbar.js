import Container from 'react-bootstrap/Container';
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png';

function NavSc() {
  return (
    <Navbar bg="dark" variant={"dark"}Sexpand="lg" className="shadow bg-light border-primary text-center">
      <Container fluid>
        <a className="navbar-brand" href="#">
            <img src={logo} alt="logo"/>
        </a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
            <Nav.Link href="../">Home</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="../funcionarios">Funcionarios</NavDropdown.Item>
              <NavDropdown.Item href="../clientes">
                Clientes
              </NavDropdown.Item>
              <NavDropdown.Item href="../salas">
                Salas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <MDBBtn outline color="light" floating className='me-4 text-reset' href="../index" role='button'>
            <MDBIcon className='fa-solid fa-greater-than' color='white' fas icon='rss'/>
          </MDBBtn>
      </Container>
    </Navbar>
  );
}

export default NavSc;