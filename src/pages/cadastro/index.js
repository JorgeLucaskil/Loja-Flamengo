import Menu from "../componentes/Menu";
import "./Cadastro.css";
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';

function Cadastro() {
  return (
        <div className="formula">
        <Menu></Menu>
        <MDBContainer fluid>
  <MDBRow className='d-flex justify-content-center align-items-center h-100'>
    <MDBCol col='12'>
      <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '800px'}}>
        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

          <h2 className="fw-bold mb-2 text-uppercase">Cadastro</h2>
          <p className="text-white-50 mb-5">Por favor insira seu email e senha!</p>

          <div className='d-flex flex-column flex-md-row align-items-center'>
            <MDBInput wrapperClass='mb-4 mx-2 w-200' className="tacata" labelClass='text-white' placeholder="Nome" id='formControlLg' type='text' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-2 w-200' className="tacata" labelClass='text-white' placeholder='Senha' id='formControlLg' type='text' size="lg"/>
          </div>
          <MDBInput wrapperClass='mb-4 mx-2 w-75' labelClass='text-white' placeholder='Email' id='formControlLg' type='email' size="lg"/>
          <div className='d-flex flex-column flex-md-row align-items-center'>
            <MDBInput wrapperClass='mb-4 mx-2 w-200' labelClass='text-white' placeholder='CPF' id='formControlLg' type='text' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-2 w-200' labelClass='text-white' placeholder='Celular' id='formControlLg' type='text' size="lg"/>
          </div>

          <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Esqueceu a senha?</a></p>
          
        <MDBBtn outline className='mx-2 px-5' color='white' size='lg' style={{ color: 'white' }}>
             Cadastre-se
        </MDBBtn>

          <br/>

          <div>
            <p className="mb-0">Não tem conta? <a href="/login" className="text-white-50 fw-bold">Login</a></p>
          </div>

        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>

    </div>
  );
}

export default Cadastro;