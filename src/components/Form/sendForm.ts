import item from "../../interfaces/itemInterface";

export default function sendForm(productId: string | undefined, inputName: string, inputQtd: string, inputPrice: string, select: string, description: string) {
  if (productId) {
    const allItems: item[] = JSON.parse(localStorage.allItems)
    const createdDate: string = allItems[Number(productId)].createdAt
    const dateToCompare = allItems[Number(productId)].dateToCompare

    allItems[Number(productId)] = {name: inputName, qtd: inputQtd, price: inputPrice, category: select, description,
      createdAt: createdDate, editedAt: new Date().toUTCString().slice(4, 16), dateToCompare}
    localStorage.allItems = JSON.stringify(allItems)
  }
  else if (localStorage.allItems.length > 0) {
    const allItems: item[] = JSON.parse(localStorage.allItems)
    const dateToCompare = Number(new Date())

    allItems.push({name: inputName, qtd: inputQtd, price: inputPrice, category: select, description,
    createdAt: new Date().toUTCString().slice(4, 16), editedAt: '', dateToCompare})
    localStorage.allItems = JSON.stringify(allItems)
  }
  else {
    const dateToCompare = Number(new Date())

    const item = [{name: inputName, qtd: inputQtd, price: inputPrice, category: select, description,
    createdAt: new Date().toUTCString().slice(4, 16), editedAt: '', dateToCompare}]
    localStorage.allItems = JSON.stringify(item)
  }
}