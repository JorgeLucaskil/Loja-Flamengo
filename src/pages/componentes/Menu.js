import "./Menu.css";
import Logo from "./img/logo.png";
import Carrinho from "./img/carrinho.png";

function Menu() {
    return (
        <div className="menu">
            <div className="area-logo">
            <img className="logo" src={Logo}></img>
            </div>
            <div className="area-pesquisa">
                <form>   
                    <input type="text" className="pesquisa" placeholder="Pesquise aqui"></input>
                    <input type="submit" value="Pesquisar" className="button"></input>
                </form> 
            </div>
            <div className="area-menu">
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/produto"><li>Produtos</li></a>
                    <div className="carrinho">
                        <img className="carrinhoimg" src={Carrinho}></img>
                    </div>
                </ul>
            </div>
        </div>
    );
  }
  
  export default Menu;
  