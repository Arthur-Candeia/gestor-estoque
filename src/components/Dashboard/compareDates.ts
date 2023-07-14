export default function compareDates(date2: number) {
  const date1 = Number(new Date())
  if (Math.floor((date1 - date2) / (1000 * 60 * 60 * 24)) < 10) {
    return 1;
  }
  else {return 0}
} 