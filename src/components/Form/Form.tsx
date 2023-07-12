import { Link, useNavigate, useParams } from "react-router-dom";
import './Form.scss';
import { useState } from "react";

interface item {
  name: string,
  qtd: string,
  price: string,
  category: string,
  description: string
}

export default function Form() {

  const {productId} = useParams()
  const navigate = useNavigate()

  const [inputName, setInputName] = useState<string>('')
  const [inputQtd, setInputQtd] = useState<string>('')
  const [inputPrice, setInputPrice] = useState<string>('')
  const [select, setSelect] = useState<string>('X')
  const [description, setDescription] = useState<string>('')

  function handleSubmit(ev: React.FormEvent) {   
    ev.preventDefault()
    
    if (localStorage.allItems) {
      const allItems: item[] = JSON.parse(localStorage.allItems)
      allItems.push({name: inputName, qtd: inputQtd, price: inputPrice, category: select, description})
      localStorage.allItems = JSON.stringify(allItems)
    }
    else {
      const item = [{name: inputName, qtd: inputQtd, price: inputPrice, category: select, description}]
      localStorage.allItems = JSON.stringify(item)
    }
    navigate('/stock')
  }

  return (
    <section id="form">
      <h1>Stock Items</h1>
      <div className="navigation">
        <Link to='/stock'>Todos os itens</Link>
        <Link to='/stock/newItem' style={!productId ? {borderBottom: '2px solid white'} : {borderBottom: 'none'}}>Novo item</Link>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label> <br />
          <input type="text" id="name" value={inputName} onChange={(ev) => setInputName(ev.target.value)} required/>
        </div>
        <div>
          <label htmlFor="inputQtd">Quantidade</label> <br />
          <input type="number" id="inputQtd" value={inputQtd} onChange={(ev) => setInputQtd(ev.target.value)} required/>
        </div>
        <div>
          <label htmlFor="price">Preço</label> <br />
          <input type="number" id="price" value={inputPrice} onChange={(ev) => setInputPrice(ev.target.value)} required/>
        </div>
        <div>
          <label htmlFor="category">Categoria</label> <br />
          <select id="category" value={select} onChange={(ev) => setSelect(ev.target.value)}>
            <option disabled value="X">Selecione uma categoria...</option>
            <option value="Jogos">Jogos</option>
            <option value="Comida">Comida</option>
            <option value="Saúde">Saúde</option>
            <option value="Beleza">Beleza</option>
            <option value="Limpeza">Limpeza</option>
          </select> 
        </div> <br />
        <div>
          <label htmlFor="description">Descrição</label> <br />
          <textarea id="description" cols={30} rows={10} value={description} onChange={(ev) => setDescription(ev.target.value)}></textarea> <br />
          <input type="submit" value="SALVAR" />
        </div>
      </form>
    </section>
  )
}