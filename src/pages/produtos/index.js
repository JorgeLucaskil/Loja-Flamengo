import Menu from "../componentes/Menu";
import "./Produtos.css";
import { MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Prod1 from "../componentes/img/flamengo3.png";
import Prod2 from "../componentes/img/flamengo4.png.jpg";

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

function Produtos() {
    return (
      <div>
        <Menu></Menu>
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center align-items-center h-100'">
          <MDBCol col-md={6}>
          <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Prod1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Prod2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="mapa">
      <img src={Prod1} className="mapaimg"></img>
      <img src={Prod2} className="mapaimg2"></img>
    </div>


    
          </MDBCol>


          <MDBCol col-md={6}><br></br>
          <h5>MANTO FLAMENGO JOGO 2 ADIDAS 2023</h5>
          <h6>CÓD:12016250060002</h6>
          <br></br>
          <hr></hr>
          <p>DE: <b>R$ 349,99</b></p>
          <p className="valorpromo"><b>POR: R$ 299,99</b></p>
          <p className="parcela">ou 4x de R$ 74,99</p>
          <p className="desconto">Economizou de R$ 50,00</p>
          
              <MDBBtnGroup>
          <MDBRadio btn btnColor='danger' id='btn-radio' name='options' wrapperTag='span' wrapperClass='mx-2' label='P' />
          <MDBRadio
            btn
            btnColor='danger'
            id='btn-radio2'
            name='options'
            wrapperClass='mx-2'
            wrapperTag='span'
            label='M'
            defaultChecked
          />
          <MDBRadio btn btnColor='danger' id='btn-radio3' name='options' wrapperTag='span' wrapperClass='mx-2' label='G' />

          <MDBRadio btn btnColor='danger' id='btn-radio4' name='options' wrapperTag='span' wrapperClass='mx-2' label='GG' />

          <MDBRadio btn btnColor='danger' id='btn-radio5' name='options' wrapperTag='span' wrapperClass='mx-2' label='2GG' />

          <MDBRadio btn btnColor='danger' id='btn-radio6' name='options' wrapperTag='span' wrapperClass='mx-2' label='3GG' />
        </MDBBtnGroup>
          
          <br></br>
          <br></br>
          <h5>Personalize a camisa</h5>

          <form>
            <input type="radio" ></input>  Seu Nome/número
            <br></br>
            
            <input type="text" placeholder="Nome:" name="name" maxLength="13"></input>
            <input type="number" placeholder="Número" name="number" maxLength="2" className="numero"></input>
            <br></br>
            <br></br>

            <input type="radio" ></input>  Escolha seu jogador

            <br></br>
            

            <select className="jgd"><option value="" disabled="disabled" selected="selected">Selecione</option><option value="VARELA/2">VARELA - 2</option><option value="R. CAIO/3">R. CAIO - 3</option><option value="LÉO PEREIRA/4">LÉO PEREIRA - 4</option><option value="ERICK/5">ERICK - 5</option><option value="AYRTON LUCAS/6">AYRTON LUCAS - 6</option><option value="E. RIBEIRO/7">E. RIBEIRO - 7</option><option value="THIAGO MAIA/8">THIAGO MAIA - 8</option><option value="PEDRO/9">PEDRO - 9</option><option value="GABI/10">GABI - 10</option><option value="EVERTON/11">EVERTON - 11</option><option value="DE ARRASCAETA/14">DE ARRASCAETA - 14</option><option value="FABRÍCIO B./15">FABRÍCIO B. - 15</option><option value="FILIPE LUÍS/16">FILIPE LUÍS - 16</option><option value="EVERTON/19">EVERTON - 19</option><option value="GERSON/20">GERSON - 20</option><option value="ALLAN/21">ALLAN - 21</option><option value="L. ARAÚJO/22">L. ARAÚJO - 22</option><option value="DAVID LUIZ/23">DAVID LUIZ - 23</option><option value="B. HENRIQUE/27">B. HENRIQUE - 27</option><option value="VICTOR HUGO/29">VICTOR HUGO - 29</option><option value="PABLO/30">PABLO - 30</option><option value="MATHEUZINHO/34">MATHEUZINHO - 34</option><option value="MATHEUS FRANÇA/42">MATHEUS FRANÇA - 42</option></select>
          </form>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
<br></br>
<br></br>
<br></br>
<hr></hr>
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center align-items-center h-100'">
        <MDBCol col-md={12}>
          <h5>MAIS SOBRE O PRODUTO</h5>
          <br></br>
          <p>Clean e clássica. Esta camisa adidas do segundo uniforme do Flamengo foi criada para manter os jovens torcedores confortáveis enquanto torcem pelo time.</p>
          <br></br>
          <p>Por trás do design atemporal, o tecido AEROREADY que remove o suor garante a autoconfiança, não importa o que aconteça no campo de futebol. O escudo premium bordado deixa claro para quem vai a sua torcida.</p>
          <br></br>
          <p>Feito 100% de materiais reciclados, este produto representa apenas uma das nossas soluções para ajudar a acabar com os resíduos plásticos.</p>
          <br></br>
          <p>Informações e Características do Produto:</p>
          <p>Nome do Produto: Manto Flamengo Jogo 2</p>
          <p>Ano: 23/24</p>
          <p>Modelo: Torcedor</p>
          <p>Composição: 100% poliéster</p>
          <p>Marca: Adidas</p>
        </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    );
  }
  
  export default Produtos;
  