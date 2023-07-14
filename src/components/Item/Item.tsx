import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import deleteItem from "./deleteItem";
import item from '../../interfaces/itemInterface';
import './Item.scss';

export default function Item() {
  const {productId} = useParams<string>()
  const allItems: item[] = useLoaderData() as item[]
  const element = productId != undefined ? allItems[Number(productId)] : productId;
  const navigate = useNavigate()

  useEffect(() => {
    if (allItems[Number(productId)] == undefined) {
      navigate('/stock')
    }
  },[allItems, productId, navigate])

  return (
    <section id="item">
      <h1>Stock Items</h1>
      <div className="navigation">
        <Link to='/stock'>Todos os itens</Link>
        <Link to='/stock/newItem'>Novo item</Link>
      </div>
      <aside id="itemNavigation">
        <p id="itemName">{element?.name}</p>
        <Link to={`/stock/editItem/${productId}`}>Atualizar</Link>
        <Link to='/stock' onClick={() => deleteItem(allItems, productId)}>Excluir</Link>
      </aside>
      <div id="itemInfos">
        <span className="itemInfo">Categoria: {element?.category}</span>
        <span className="itemInfo">Quantidade em estoque: {element?.qtd}</span>
        <span className="itemInfo">Preço: R${element?.price}</span>
      </div>
      <div id="itemDescription">
        <p>{element?.description}</p> <br />
        <span id="itemCreateDate">Cadastrado em: {element?.createdAt}</span>
        <span id="itemEditDate">Atualizado em em: {element?.editedAt}</span>
      </div>
    </section>
  )
}