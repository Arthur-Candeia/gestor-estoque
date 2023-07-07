import { Link } from "react-router-dom";
import './Item.scss';

export default function Item() {
  return (
    <section id="item">
      <h1>Stock Items</h1>
      <div className="navigation">
        <Link to='/stock'>Todos os itens</Link>
        <Link to='/stock/newItem'>Novo item</Link>
      </div>
      <aside id="itemNavigation">
        <p id="itemName">7 Wonders</p>
        <Link to='/stock/:productId'>Atualizar</Link>
        <Link to='/stock/edit/:productId'>Excluir</Link>
      </aside>
      <div id="itemInfos">
        <span className="itemInfo">Categoria: Jogos</span>
        <span className="itemInfo">Quantidade em estoque: 8</span>
        <span className="itemInfo">Preço: R$399,99</span>
      </div>
      <div id="itemDescription">
        <p>Jogo de tabuleiro para vários jogadores</p> <br />
        <span id="itemCreateDate">Cadastrado em:</span>
        <span id="itemEditDate">Atualizado em em:</span>
      </div>
    </section>
  )
}