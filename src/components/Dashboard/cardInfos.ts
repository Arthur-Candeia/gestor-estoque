import compareDates from "./compareDates";
import item from "../../interfaces/itemInterface";

export default function cardInfos(allItems: item[]) {
  let diversity = 0;
  let totalItems = 0;
  let fewItems = 0;
  let recentItems = 0;

  allItems?.forEach((element) => {
    let flag = 0;
    for (let i = allItems.length - 1; i >= 0; i--) {
      if (element.name == allItems[i].name) {flag++;}
    }
    if (flag == 1) {diversity++;}
    totalItems += +element.qtd
    Number(element.qtd) < 10 ? fewItems++ : fewItems;

    if (compareDates(element.dateToCompare)) {
      recentItems++;
    }
  })

  return {diversity, totalItems, fewItems, recentItems}
}