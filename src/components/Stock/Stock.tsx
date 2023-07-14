import { Link, useLoaderData } from "react-router-dom";
import deleteItem from "../Item/deleteItem";
import item from '../../interfaces/itemInterface';
import './Stock.scss';

export default function Stock() {
  const allItems: item[] = useLoaderData() as item[]

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
          {allItems?.length > 0 ? allItems?.map((element, index) =>
          <tr key={index}>
            <td>{index}</td>
            <td>{element.name}</td>
            <td>{element.qtd} unid.</td>
            <td>{element.category}</td>
            <td>
              <Link to={`/stock/${index}`}>Ver</Link>
              <Link to={`/stock/editItem/${index}`}>Atualizar</Link>
              <Link to="/stock" onClick={() => deleteItem(allItems, String(index))}>Excluir</Link>
            </td>
          </tr>
          ) : <tr><td>Não há produtos aqui, adicione-os!</td></tr>}
        </tbody>
      </table>
    </section>
  )
}