import BoxItem from "../componentes/BoxItem";
import Menu from "../componentes/Menu";
import Rodape from "../componentes/Rodape";
import Banner from "./componentes/Banner";
import Fornecedor from "./componentes/Fornecedor";
import "./Home.css";

function Home() {
    return (
      <div>
        <Menu></Menu>
        <Banner></Banner>
        <div className="vertodos">
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
          <BoxItem></BoxItem>
          <BoxItem></BoxItem>
          <BoxItem></BoxItem>
        </div>
        <br></br>
        <center><h1 className="titulo">Principais Fornecedores</h1></center>
        <div className="area-fornecedores">
          <Fornecedor></Fornecedor>
          <Fornecedor></Fornecedor>
          <Fornecedor></Fornecedor>
          <Fornecedor></Fornecedor>
          <Fornecedor></Fornecedor>
          <Fornecedor></Fornecedor>
        </div>
          <Rodape></Rodape>
      </div>
    );
  }
  
  export default Home;
  