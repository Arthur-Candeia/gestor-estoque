import item from '../../interfaces/itemInterface'

export default function deleteItem(allItems: item[], index: string | undefined) {
  if (confirm(`Deseja realmente excluir o item ${allItems[Number(index)].name}?`)) {
    allItems.splice(Number(index), 1);
    localStorage.allItems = JSON.stringify(allItems)
  }
}