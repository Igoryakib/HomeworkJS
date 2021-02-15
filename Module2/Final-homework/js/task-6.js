let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введіть число -");
  if (input === null) {
    break;
  }

  const x = Number(input);
  if (Number.isNaN(x)) {
    alert("Ви ввели букву, а не число!!!");
    continue;
  }
  numbers.push(x);
  console.log(numbers);

  if(numbers.length === 0) {
    console.log('пустий масив');
    break
  }

} while (true);

for(let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

console.log(`Загальна сума чисел дорівнює ${total}`);
