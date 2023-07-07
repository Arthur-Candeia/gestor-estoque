import { Link } from "react-router-dom";
import './Stock.scss';

export default function Stock() {
  return (
    <section id="stock">
      <h1>Stock Items</h1>
      <div className="navigation">
        <Link to='/stock'>Todos os itens</Link>
        <Link to='/stock/newItem'>Novo item</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{width: '25%'}}>ID</th>
            <th style={{width: '20%'}}>Nome</th>
            <th style={{width: '15%'}}>Em Estoque</th>
            <th style={{width: '15%'}}>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
            <td>abc</td>
            <td>
              <Link to="/stock/asda">Ver</Link>
              <a href="#">Atualizar</a>
              <a href="#">Excluir</a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}