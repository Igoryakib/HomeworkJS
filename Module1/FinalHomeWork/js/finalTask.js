"use strict";







// 6
let input;
let total2 = 0;
do {
    input = prompt('Введіть число :');

    if (input === null) {
        break;
    }
  const x = Number(input);
    if (Number.isNaN(x)) {
        alert('Ви ввели букву, а не число!!!')
        continue;
    }

    total2 += x;

    console.log(x);
} while(true);

alert(`Загальна сума чисел дорівнює ${total2}`);