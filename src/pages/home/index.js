import BoxItem from "../componentes/BoxItem";
import BoxItem2 from "../componentes/BoxItem2";
import Menu from "../componentes/Menu";
import Rodape from "../componentes/Rodape";
import Banner from "./componentes/Banner";
import Fornecedor from "./componentes/Fornecedor";
import "./Home.css";
import Manto1 from "./componentes/img/manto1.png";
import Manto2 from "./componentes/img/manto2.png";
import Manto3 from "./componentes/img/manto3.png";
import Formulario from "./componentes/Form";

function Home() {
    return (
      <div>
        <Menu></Menu>
        <Banner></Banner>
        <br></br>
        <div className="vertodos" id="masc">
          <div className="area-esq">
        <h1 className="titulo">Principais Produtos</h1>
        <div className="linha"></div>
          </div>
          <div className="area-dir">
            <p className="verprod"><b>ver produtos</b></p>
          </div>
        </div>
        <br></br>
        <div className="area-itens">
          <BoxItem></BoxItem>
        </div>
        <br></br>
        
        <div className="vertodos">
          <div className="area-esq">
        <h1 className="titulo">Mais vendidos feminino</h1>
        <div className="linha"></div>
          </div>
          <div className="area-dir">
            <p className="verprod"><b>ver produtos</b></p>
          </div>
        </div>
        <br></br>
        <div className="area-itens">
          <BoxItem2></BoxItem2>
        </div>
        <br></br>

        <div className="area-manto">
        <center><h1 className="titulo1">Mantos Oficiais</h1></center>
        <center><div className="linha-manto"></div></center>
        <br></br>
        <div className="mantos">
          <center><img src={Manto1} className="manto1"></img>
          <img src={Manto2} className="manto2"></img>
          <img src={Manto3} className="manto3"></img></center>
        </div>
        </div>
        
        

        <br></br>
        <br></br>

        <center><h1 className="titulo1">Patrocinadores</h1></center>
        <center><div className="linha-manto"></div></center>
        <br></br>
        <br></br>
        <div className="area-fornecedores">
          <Fornecedor></Fornecedor>
        </div>
        <br></br>
        <br></br>
        <center><h1 className="titulo1">Receba Novidades</h1></center>
        <center><div className="linha-manto"></div></center>
        <br></br>
        <br></br>
        <div className="area-formulario">
          <div className="form">
        <Formulario></Formulario>
          </div>
        </div>
          <Rodape></Rodape>
      </div>
    );
  }
  
  export default Home;
  