import "./BoxItem.css";

function BoxItem() {
  return (
    <div className="box">
      <img src="" className="im-box"></img>
      <h5>Produto</h5>
      <h4>R$ 00,00</h4>
      <button className="btn-primary">Comprar</button>
    </div>
  );
}

export default BoxItem;