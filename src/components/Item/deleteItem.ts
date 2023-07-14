import item from '../../interfaces/itemInterface'

export default function deleteItem(allItems: item[], index: string | undefined) {
  allItems.splice(Number(index));
  localStorage.allItems = JSON.stringify(allItems)
}