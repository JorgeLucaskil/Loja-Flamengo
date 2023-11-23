import "./BoxItem2.css";
import Feminino1 from "./img/feminino1.png";
import Feminino2 from "./img/feminino2.png";
import Feminino3 from "./img/feminino3.png";

function BoxItem2() {
    return (
      <div className="Area-prod">
          {/*camisa 1*/}
          
        <div className="box">
          <a href=""><img src={Feminino1} className="im-box"></img></a>
          <h6 className="anuncio1">Manto Flamengo Feminina Jogo 1 Adidas 2023</h6>
          <h5 className="anuncio2">R$ 199,99</h5>
          <button className="btn-primary">Comprar+</button>
        </div>
        
          {/*camisa 2*/}
        
          <div className="box">
          <a href=""><img src={Feminino2} className="im-box"></img></a>
          <h6 className="anuncio1">Jaqueta Flamengo Feminina Avatar Braziline</h6>
          <h5 className="anuncio2">R$ 299,99</h5>
          <button className="btn-primary">Comprar+</button>
        </div>
        
          {/*camisa 3*/}
          
        <div className="box">
          <a href=""><img src={Feminino3} className="im-box"></img></a>
          <h6 className="anuncio1" >Manto Flamengo Feminina Jogo 2 Adidas 2023</h6>
          <h5 className="anuncio2">R$ 349,99</h5>
          <button className="btn-primary">Comprar+</button>
        </div>
        
          {/*camisa 4*/}
          
        <div className="box">
          <a href=""><img src={Feminino1} className="im-box"></img></a>
          <h6 className="anuncio1">Camisa Flamengo 2021/22 Branca II Adidas
  </h6>
          <p className="anuncio2">R$ 229,99</p>
          <button className="btn-primary">Comprar+</button>
        </div>
        
      </div>
    );
  }
  
  export default BoxItem2;