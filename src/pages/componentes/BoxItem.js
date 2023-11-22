import "./BoxItem.css";
import Camisa1 from "./img/flamengo.jpg";
import Camisa2 from "./img/flamengo3.png";
import Camisa3 from "./img/flamengo6.png";
import Camisa4 from "./img/flamengo7.png";


function BoxItem() {
  return (
    <div className="Area-prod">
        {/*camisa 1*/}
        <a href="">
      <div className="box">
        <img src={Camisa1} className="im-box"></img>
        <h6>Camisa Flamengo Pré Jogo Adidas 2023</h6>
        <h5>R$ 199,99</h5>
        <button className="btn-primary">Comprar+</button>
      </div>
      </a>
        {/*camisa 2*/}
      <a href="">
        <div className="box">
        <img src={Camisa2} className="im-box"></img>
        <h6>Camisa Flamengo Nineteen Braziline</h6>
        <h5>R$ 199,99</h5>
        <button className="btn-primary">Comprar+</button>
      </div>
      </a>
        {/*camisa 3*/}
        <a href="">
      <div className="box">
        <img src={Camisa3} className="im-box"></img>
        <h6>Manto Flamengo jogo 2 adidas 2023</h6>
        <h5>R$ 349,99</h5>
        <button className="btn-primary">Comprar+</button>
      </div>
      </a>
        {/*camisa 4*/}
        <a href="">
      <div className="box">
        <img src={Camisa4} className="im-box"></img>
        <h6>Camisa Flamengo 2021/22 Branca II Adidas
</h6>
        <h5>R$ 229,99</h5>
        <button className="btn-primary">Comprar+</button>
      </div>
      </a>
    </div>
  );
}

export default BoxItem;