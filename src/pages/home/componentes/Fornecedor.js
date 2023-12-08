import "./Fornecedor.css";
import PAT1 from "./img/pat1.png";
import PAT2 from "./img/pat2.png";
import PAT3 from "./img/pat3.png";
import PAT4 from "./img/pat4.png";
import PAT5 from "./img/pat5.png";

function Fornecedor() {
  return (
    <div className="fornecedor">
        <img src={PAT1} className="img"></img>
        <img src={PAT2} className="img"></img>
        <img src={PAT3} className="img"></img>
        <img src={PAT4} className="img"></img>
        <img src={PAT5} className="img"></img>
    </div>
    
  );
}

export default Fornecedor;