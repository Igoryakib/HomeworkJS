const countTotalSalary = employees => {
  const values = Object.values(employees);
  let total = 0;
  for (let i = 0; i < values.length; i += 1) {
    total += values[i];
  }
  return total;
};

console.log(
  "Загальна зарплата працівників -",
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  "Загальна зарплата працівників -",
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
