import "./BoxItem.css";
import Camisa12 from "./img/flamengo12.png";
import Camisa13 from "./img/flamengo13.png";
import Camisa14 from "./img/flamengo14.png";
import Camisa15 from "./img/flamengo15.png";


function BoxItem() {
  return (
    <div className="Area-prod">
        {/*camisa 1*/}
        
      <div className="box">
        <a href="/produto"><img src={Camisa12} className="im-box"></img></a>
        <h6 className="anuncio1">Jaqueta Flamengo Corta Vento Adidas Preto 2023</h6>
        <h5 className="anuncio2">R$ 499,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 2*/}
      
        <div className="box">
        <a href="/produto"><img src={Camisa13} className="im-box"></img></a>
        <h6 className="anuncio1">Moletom Flamengo DNA Preto Adidas 2023</h6>
        <h5 className="anuncio2">R$ 399,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 3*/}
        
      <div className="box">
        <a href="/produto"><img src={Camisa14} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo Classmate Braziline</h6>
        <h5 className="anuncio2">R$ 139,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 4*/}
      <div className="box">
<a href="/produto"><img src={Camisa15} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo Apprendice Braziline
</h6>
        <h5 className="anuncio2">R$ 89,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
    </div>
  );
}

export default BoxItem;