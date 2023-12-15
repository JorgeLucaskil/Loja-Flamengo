import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Carrinho from "./pages/carrinho";
import Home from "./pages/home";
import Prodind from "./pages/prodind";
import Produtos from "./pages/produtos";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";

function RotasCat() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/carrinho" element={<Carrinho></Carrinho>}></Route>
            <Route path="/produto" element={<Produtos></Produtos>}></Route>
            <Route path="/prodind" element={<Prodind></Prodind>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/cadastro" element={<Cadastro></Cadastro>}></Route>
        </Routes>
      </Router>
    );
  }
  
  export default RotasCat;
  