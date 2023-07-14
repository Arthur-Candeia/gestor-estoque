import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import sendForm from "./sendForm";
import item from '../../interfaces/itemInterface';
import './Form.scss';

export default function Form() {
  
  const navigate = useNavigate()
  const allItems = useLoaderData() as item[]
  const {productId} = useParams()
  let editItem: item | undefined;

  if (productId && localStorage) {
    editItem = allItems[Number(productId)]
  }

  useEffect(() => {
    if (editItem == undefined && productId) {
      navigate('/stock')
    }
  },[editItem, productId, navigate])

  const [inputName, setInputName] = useState<string>(editItem?.name ?? '')
  const [inputQtd, setInputQtd] = useState<string>(editItem?.qtd ?? '')
  const [inputPrice, setInputPrice] = useState<string>(editItem?.price ?? '')
  const [select, setSelect] = useState<string>(editItem?.category ?? 'X')
  const [description, setDescription] = useState<string>(editItem?.description ?? '')

  function handleSubmit(ev: React.FormEvent) {   
    ev.preventDefault()
    sendForm(productId, inputName, inputQtd, inputPrice, select, description)
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
          <input type="number" id="price" value={inputPrice} onChange={(ev) => setInputPrice(ev.target.value)} step={0.01}required/>
        </div>
        <div>
          <label htmlFor="category">Categoria</label> <br />
          <select id="category" value={select} onChange={(ev) => setSelect(ev.target.value)} required>
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
          <textarea id="description" cols={30} rows={10} value={description} onChange={(ev) => setDescription(ev.target.value != '' ? ev.target.value : '')} required></textarea> <br />
          <input type="submit" value="SALVAR" />
        </div>
      </form>
    </section>
  )
}