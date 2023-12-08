import "./BoxItem.css";
import Camisa1 from "./img/flamengo.jpg";
import Camisa2 from "./img/flamengo3.png";
import Camisa3 from "./img/flamengo6.png";
import Camisa4 from "./img/flamengo7.png";


function BoxItem() {
  return (
    <div className="Area-prod">
        {/*camisa 1*/}
        
      <div className="box">
        <a href="/produto"><img src={Camisa1} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo Pré Jogo Adidas 2023</h6>
        <h5 className="anuncio2">R$ 199,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 2*/}
      
        <div className="box">
        <a href="/produto"><img src={Camisa2} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo Nineteen Braziline</h6>
        <h5 className="anuncio2">R$ 199,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 3*/}
        
      <div className="box">
        <a href="/produto"><img src={Camisa3} className="im-box"></img></a>
        <h6 className="anuncio1">Manto Flamengo jogo 2 adidas 2023</h6>
        <h5 className="anuncio2">R$ 349,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 4*/}
      <div className="box">
<a href="/produto"><img src={Camisa4} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo 2021/22 Branca II Adidas
</h6>
        <h5 className="anuncio2">R$ 229,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
    </div>
  );
}

export default BoxItem;