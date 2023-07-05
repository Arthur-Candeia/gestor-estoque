import './Dashboard.scss'

export default function Dashboard() {
  return (
    <section id="dashboard">
      <h1>Dashboard</h1>
      <aside id="cards">
        <div className="card">
          <p>Diversidade de itens</p>
          <span className="cardQtd">8</span>
        </div>
        <div className="card">
          <p>Inventário total</p>
          <span className="cardQtd">7</span>
        </div>
        <div className="card">
          <p>Itens recentes</p>
          <span className="cardQtd">7</span>
        </div>
        <div className="card">
        <p>Itens acabando</p>
        <span className="cardQtd">2</span>
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
        <tr>
          <td>7 wonderful</td>
          <td><a href="#">Ver</a></td>
        </tr>
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
        <tr>
          <td >7 wonderful</td>
          <td>8</td>
          <td>Ver</td>
        </tr>
        </tbody>
      </table>
    </section>
  )
}