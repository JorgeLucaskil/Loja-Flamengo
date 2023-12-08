import "./BoxItem.css";
import Camisa8 from "./img/flamengo8.png";
import Camisa9 from "./img/flamengo9.png";
import Camisa10 from "./img/flamengo10.png";
import Camisa11 from "./img/flamengo11.png";


function BoxItem() {
  return (
    <div className="Area-prod">
        {/*camisa 1*/}
        
      <div className="box">
        <a href="/produto"><img src={Camisa8} className="im-box"></img></a>
        <h6 className="anuncio1">Manto Flamengo Jogo 1 Adidas 2023</h6>
        <h5 className="anuncio2">R$ 299,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 2*/}
      
        <div className="box">
        <a href="/produto"><img src={Camisa9} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Polo Flamengo Instructor Braziline</h6>
        <h5 className="anuncio2">R$ 179,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 3*/}
        
      <div className="box">
        <a href="/produto"><img src={Camisa10} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo Essay Braziline</h6>
        <h5 className="anuncio2">R$ 299,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 4*/}
      <div className="box">
<a href="/produto"><img src={Camisa11} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo Graduate Braziline
</h6>
        <h5 className="anuncio2">R$ 89,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
    </div>
  );
}

export default BoxItem;