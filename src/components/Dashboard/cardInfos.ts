import compareDates from "./compareDates";
import item from "../../interfaces/itemInterface";

export default function cardInfos(allItems: item[]) {
  const diversity = allItems.length;
  let totalItems = 0;
  let fewItems = 0;
  let recentItems = 0;

  allItems?.forEach((element) => {
    totalItems += +element.qtd
    Number(element.qtd) < 10 ? fewItems++ : fewItems;

    if (compareDates(element.dateToCompare)) {
      recentItems++;
    }
  })

  return {diversity, totalItems, fewItems, recentItems}
}