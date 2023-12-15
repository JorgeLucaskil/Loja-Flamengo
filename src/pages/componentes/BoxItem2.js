import "./BoxItem2.css";
import Feminino1 from "./img/feminino1.png";
import Feminino2 from "./img/feminino2.png";
import Feminino3 from "./img/feminino3.png";
import Feminino4 from "./img/feminino4.png";

function BoxItem2() {
    return (
      <div className="Area-prod">
          {/*camisa 1*/}
          
        <div className="box">
          <a href="/produto"><img src={Feminino1} className="im-box"></img></a>
          <h6 className="anuncio1">Manto Flamengo Feminina 1 Adidas 2023</h6>
          <h5 className="anuncio2">R$ 199,99</h5>
          <a href="/produto"><button className="btn-primary">Comprar+</button></a>
        </div>
        
          {/*camisa 2*/}
        
          <div className="box">
          <a href="/produto"><img src={Feminino2} className="im-box"></img></a>
          <h6 className="anuncio1">Jaqueta Flamengo Feminina Avatar Braziline</h6>
          <h5 className="anuncio2">R$ 299,99</h5>
          <a href="/produto"><button className="btn-primary">Comprar+</button></a>
        </div>
        
          {/*camisa 3*/}
          
        <div className="box">
          <a href="/produto"><img src={Feminino3} className="im-box"></img></a>
          <h6 className="anuncio1" >Manto Flamengo Feminina 2 Adidas 2023</h6>
          <h5 className="anuncio2">R$ 349,99</h5>
          <a href="/produto"><button className="btn-primary">Comprar+</button></a>
        </div>
        
          {/*camisa 4*/}
          
        <div className="box">
          <a href="/produto"><img src={Feminino4} className="im-box"></img></a>
          <h6 className="anuncio1">Camisa Flamengo Feminina Grasp Braziline</h6>
          <p className="anuncio2">R$ 229,99</p>
          <a href="/produto"><button className="btn-primary">Comprar+</button></a>
        </div>
        
      </div>
    );
  }
  
  export default BoxItem2;