function solveEquation(a, b, c) {
  let arr;
  const dis = b ** 2 - 4 * a * c;
  if (dis < 0) return [];
  const x1 = (-b + Math.sqrt(dis))/(2 * a);
  const x2 = (-b - Math.sqrt(dis))/(2 * a);
  arr = x1 === x2 ? [x1] : [x1, x2];
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(+percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  };
  if (isNaN(+contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  };
  if (isNaN(+amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  };

  const loanBody = amount - contribution;
  const currentDate = new Date()
  let months
  months = (date.getFullYear() - currentDate.getFullYear()) * 12;
  months -= currentDate.getMonth();
  months += date.getMonth();

  const p = percent / 100 / 12
  const monthlyPayment = loanBody * (p + (p / (((1 + p) ** months) - 1)))
  totalAmount = +(monthlyPayment * months).toFixed(2)
  console.log(totalAmount)
  return totalAmount;
}
