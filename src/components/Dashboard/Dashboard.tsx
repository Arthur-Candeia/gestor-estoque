import { Link, useLoaderData } from 'react-router-dom';
import compareDates from './compareDates';
import cardInfos from './cardInfos';
import item from '../../interfaces/itemInterface';
import './Dashboard.scss'

export default function Dashboard() {
  const allItems: item[] = useLoaderData() as item[]
  const {diversity, totalItems, fewItems, recentItems} = cardInfos(allItems)

  return (
    <section id="dashboard">
      <h1>Dashboard</h1>
      <aside id="cards">
        <div className="card">
          <p>Diversidade de itens</p>
          <span className="cardQtd">{diversity}</span>
        </div>
        <div className="card">
          <p>Inventário total</p>
          <span className="cardQtd">{totalItems}</span>
        </div>
        <div className="card">
          <p>Itens recentes</p>
          <span className="cardQtd">{recentItems}</span>
        </div>
        <div className="card">
        <p>Itens acabando</p>
        <span className="cardQtd">{fewItems}</span>
        </div>
      </aside>
      
      <table id="recentItems">
        <thead>
          <tr>
            <th style={{textAlign: 'left'}}>Itens Recentes</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {allItems?.map((element, index) => {
            if (compareDates(element.dateToCompare)) {
              return (
              <tr key={index}>
                <td>{element.name}</td>
                <td><Link to={`/stock/${index}`}>Ver</Link></td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>

      <table id="fewItems">
        <thead>
          <tr>
            <th style={{width: '50%'}}>Itens Acabando</th>
            <th>Qtd.</th>
            <th >Ações</th>
          </tr>
        </thead>
        <tbody>
          {allItems?.map((element, index) => {
            if (Number(element.qtd) < 10) {
              return (
              <tr key={index}>
                <td>{element.name}</td>
                <td>{element.qtd}</td>
                <td><Link to={`/stock/${index}`}>Ver</Link></td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    </section>
  )
}