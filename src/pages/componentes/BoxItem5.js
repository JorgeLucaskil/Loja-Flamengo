import "./BoxItem.css";
import Feminino5 from "./img/feminino5.png";
import Feminino6 from "./img/feminino6.png";
import Feminino7 from "./img/feminino7.png";
import Feminino8 from "./img/feminino8.png";


function BoxItem() {
  return (
    <div className="Area-prod">
        {/*camisa 1*/}
        
      <div className="box">
        <a href="/produto"><img src={Feminino5} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo Apprendice Braziline</h6>
        <h5 className="anuncio2">R$ 89,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 2*/}
      
        <div className="box">
        <a href="/produto"><img src={Feminino6} className="im-box"></img></a>
        <h6 className="anuncio1">Moletom Flamengo DNA Preto Adidas 2023</h6>
        <h5 className="anuncio2">R$ 399,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 3*/}
        
      <div className="box">
        <a href="/produto"><img src={Feminino7} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo Classmate Braziline</h6>
        <h5 className="anuncio2">R$ 139,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 4*/}
      <div className="box">
<a href="/produto"><img src={Feminino8} className="im-box"></img></a>
        <h6 className="anuncio1">Jaqueta Flamengo Corta Vento Adidas Preto 2023
</h6>
        <h5 className="anuncio2">R$ 499,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
    </div>
  );
}

export default BoxItem;