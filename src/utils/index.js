export function randomNumberGenerator(num) {
  let numbers = [];

  while (numbers.length < num) {
    let randNum = Math.random().toString().substring(2,10)
    /* istanbul ignore next */
    if (numbers.includes(`07${randNum}`)) {
      continue;
    } else {
      numbers.push(`07${randNum}`);
    }
  }
  return numbers;
}

/* istanbul ignore next */
export const storageClearer = () => localStorage.removeItem('phones');

export const ascOrder = numArr =>  (numArr.map(num=>parseInt(num))).sort().map(num=>'0'+num);

export const descOrder = numArr => ascOrder(numArr).reverse();

/* istanbul ignore next */
export function downloadCsv() {
    const data = JSON.parse(localStorage.getItem('phones'));

    if(!data) {
      alert('First generate the data before you download it!');
      return;
    }
    
    /* format the data */
    const formatted = data.map((datum,i)=>[(i+1), datum.toString()]);
    let csv = 'No.,Phone Number\n';
    formatted.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });

    const hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'phonenumbers.csv';
    hiddenElement.click();
}
/* istanbul ignore next */
export const greetUser = () => { 
  const start = 0 * 0, startEnd = 6 * 60, morningEnd = 12 * 60, afternoonEnd = 16 * 60,
  eveningEnd = 21 * 60, nightEnd = 23 * 60, date = new Date(), now = date.getHours() * 60;

  return start < now && now < startEnd ?
  `Hey! good morning, it's so early. Just start by clicking "Generate Phone numbers"` :
  startEnd < now && now <= morningEnd ?
  `Good morning, start by clicking "Generate Phone numbers"` :
  morningEnd < now && now <= afternoonEnd ?
  `Good afternoon, start by clicking "Generate Phone numbers"` :
  afternoonEnd < now && now <= eveningEnd ?
  `Good evening, start by clicking "Generate Phone numbers"` :
  eveningEnd < now && now <= nightEnd ? 
  `Time to be sleeping, start by clicking "Generate Phone numbers"` : null
}





