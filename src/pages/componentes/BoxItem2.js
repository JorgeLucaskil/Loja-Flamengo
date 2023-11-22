import "./BoxItem.css";
import Feminino1 from "./img/feminino1.png";
import Feminino2 from "./img/feminino2.png";
import Feminino3 from "./img/feminino3.png";

function BoxItem2() {
    return (
      <div className="Area-prod">
          {/*camisa 1*/}
          <a href="">
        <div className="box">
          <img src={Feminino1} className="im-box"></img>
          <h6>Manto Flamengo Feminina Jogo 1 Adidas 2023</h6>
          <h5>R$ 199,99</h5>
          <button className="btn-primary">Comprar+</button>
        </div>
        </a>
          {/*camisa 2*/}
        <a href="">
          <div className="box">
          <img src={Feminino2} className="im-box"></img>
          <h6>Jaqueta Flamengo Feminina Avatar Braziline</h6>
          <h5>R$ 299,99</h5>
          <button className="btn-primary">Comprar+</button>
        </div>
        </a>
          {/*camisa 3*/}
          <a href="">
        <div className="box">
          <img src={Feminino3} className="im-box"></img>
          <h6>Manto Flamengo Feminina Jogo 2 Adidas 2023</h6>
          <h5>R$ 349,99</h5>
          <button className="btn-primary">Comprar+</button>
        </div>
        </a>
          {/*camisa 4*/}
          <a href="">
        <div className="box">
          <img src={Feminino1} className="im-box"></img>
          <h6>Camisa Flamengo 2021/22 Branca II Adidas
  </h6>
          <h5>R$ 229,99</h5>
          <button className="btn-primary">Comprar+</button>
        </div>
        </a>
      </div>
    );
  }
  
  export default BoxItem2;