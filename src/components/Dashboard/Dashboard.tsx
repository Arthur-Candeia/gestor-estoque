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
      <aside id="recentItems">
        <table>
          <thead>
            <tr>
              <th>Itens Recentes</th>
              <th>Ações</th>
            </tr>
          </thead>
          </table>
      </aside>
      <aside id="fewItems">
        <table>
          <thead>
            <tr>
              <th>Itens Acabando</th>
              <th>Ações</th>
            </tr>
          </thead>
        </table>
      </aside>
    </section>
  )
}