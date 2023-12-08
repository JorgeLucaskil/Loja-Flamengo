import "./BoxItem.css";
import Infantil1 from "./img/infantil1.png";
import Infantil2 from "./img/infantil2.png";
import Infantil3 from "./img/infantil3.png";
import Infantil4 from "./img/infantil4.png";


function BoxItem6() {
  return (
    <div className="Area-prod">
        {/*camisa 1*/}
        
      <div className="box">
        <a href="/produto"><img src={Infantil1} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo R.A.P. Vermelha A165A Starter</h6>
        <h5 className="anuncio2">R$ 159,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 2*/}
      
        <div className="box">
        <a href="/produto"><img src={Infantil2} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo Infantil Logo Veludo Starter</h6>
        <h5 className="anuncio2">R$ 109,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 3*/}
        
      <div className="box">
        <a href="/produto"><img src={Infantil3} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo Infantil Rubro Negra Brandili</h6>
        <h5 className="anuncio2">R$ 89,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
        {/*camisa 4*/}
      <div className="box">
<a href="/produto"><img src={Infantil4} className="im-box"></img></a>
        <h6 className="anuncio1">Camisa Flamengo Infantil Counselor Braziline
</h6>
        <h5 className="anuncio2">R$ 99,99</h5>
        <a href="/produto"><button className="btn-primary">Comprar+</button></a>
      </div>
      
    </div>
  );
}

export default BoxItem6;