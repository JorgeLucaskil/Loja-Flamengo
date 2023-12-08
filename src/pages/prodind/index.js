import Menu from "../componentes/Menu";
import BoxItem from "../componentes/BoxItem";
import BoxItem2 from "../componentes/BoxItem2";
import BoxItem4 from "../componentes/BoxItem4";
import BoxItem3 from "../componentes/BoxItem3";
import BoxItem5 from "../componentes/BoxItem5";
import BoxItem6 from "../componentes/BoxItem6";


import "./Prodind.css";

function Prodind() {
    return (
      <div>
        <Menu></Menu>
        <div className="area-prod">
          <div className="area-masc">
        <center><h1 className="titulo5">Produtos Masculinos</h1>
        <div className="linha5"></div></center>
          <BoxItem></BoxItem>
          <BoxItem3></BoxItem3>
          <BoxItem4></BoxItem4>
          </div>
          <br></br>
          <div className="area-fem">
          <center><h1 className="titulo6">Produtos Femininos</h1>
          <div className="linha6"></div></center>
          <BoxItem2></BoxItem2>
          <BoxItem5></BoxItem5>
          </div>
          <div className="area-inf">
          <center><h1 className="titulo7">Produtos Infantis</h1>
          <div className="linha7"></div></center>
          <BoxItem6></BoxItem6>
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Prodind;
  