import { Link } from "react-router-dom";
import './Form.scss';

export default function Form() {
  return (
    <section id="form">
      <h1>Stock Items</h1>
      <div className="navigation">
        <Link to='/stock'>Todos os itens</Link>
        <Link to='/stock/newItem'>Novo item</Link>
      </div>
      <form autoComplete="off">
        <div>
          <label htmlFor="name">Nome</label> <br />
          <input type="text" id="name" required/>
        </div>
        <div>
          <label htmlFor="inputQtd">Quantidade</label> <br />
          <input type="number" id="inputQtd" required/>
        </div>
        <div>
          <label htmlFor="price">Preço</label> <br />
          <input type="number" id="price" required/>
        </div>
        <div>
          <label htmlFor="category">Categoria</label> <br />
          <select id="category">
            <option disabled selected>Selecione uma categoria...</option>
            <option value="J">Jogos</option>
            <option value="C">Comida</option>
            <option value="S">Saúde</option>
            <option value="B">Beleza</option>
            <option value="L">Limpeza</option>
          </select> 
        </div> <br />
        <div>
          <label htmlFor="description">Descrição</label> <br />
          <textarea id="description" cols={30} rows={10}></textarea> <br />
          <input type="submit" value="SALVAR" />
        </div>
      </form>
    </section>
  )
}