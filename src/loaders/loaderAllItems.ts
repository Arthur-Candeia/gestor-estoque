export default function loaderAllItems() {
  if (localStorage.allItems) {
    return JSON.parse(localStorage.allItems)
  }
  else {
    localStorage.allItems = '[]'
    return JSON.parse(localStorage.allItems)
  }
}