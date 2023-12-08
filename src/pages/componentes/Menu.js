import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./img/logo.png";
import "./Menu.css";
import Carrinho from "./img/carrinho.png";

function Menu() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <div className='area-logo'>
        <img src={Logo} className="logo"></img>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/prodind">Produtos</Nav.Link>
            <Nav.Link href="#">
              Login
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Pesquisar</Button>
          </Form>
          <div className="carrinho">
          <img className="carrinhoimg" src={Carrinho}></img>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;