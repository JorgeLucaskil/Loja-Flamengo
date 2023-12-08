import "./Form.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario(){
    return (
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="name" placeholder="Nome" />
      </Form.Group>
      <center><Button variant="btn btn-outline-danger" type="submit" className="botao">
        Submit
      </Button></center>
    </Form>
      
    );
  }
  
  export default Formulario;