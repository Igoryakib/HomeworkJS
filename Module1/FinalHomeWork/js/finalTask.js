"use strict";

// 1
const name = "Генератор захисного поля";

let price = 1000;

console.log(`Обрано ${name} ціна за штуку ${price} кредитів`);

price = 2000;

console.log(`Обрано ${name} ціна за штуку ${price} кредитів`);

// 2
const total = 100;
const ordered = prompt("Вкажіть кількість товару -?");
if (ordered > total) {
  console.log("На складі недостатньо товарів!");
} else {
  console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
}

// 3
const ADMIN_PASSWORD = "jqueryismyjam";
let message;

message = prompt("Ваш пароль -?");
if (message === ADMIN_PASSWORD) {
  message = "Ласкаво просимо";
} else if (message === null) {
  message = "Скасовано користувачем!";
} else if (message !== ADMIN_PASSWORD) {
  message = "Доступ заборонений, невірний пароль!";
}
alert(message);

// 4
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let userMessage;
let userMessage2 = prompt(
  `У вас на балансі ${credits} кредитів 1 дроїд коштує ${pricePerDroid} кредитів. Вкажіть кількість дроїдів, які ви хочете купити ? `
);

if (userMessage2 === null) {
  userMessage = "Скасовано користувачем!";
} else {
  userMessage2 = Number(userMessage2);
  totalPrice = pricePerDroid * userMessage2;
  userMessage = `Ви купили ${userMessage2} дроїдів на суму ${totalPrice}, на рахунку залишилося ${
    credits - totalPrice
  } кредитів.`;
}
if (totalPrice > credits) {
  userMessage = "Недостатньо коштів на рахунку!";
}

if (Number.isNaN(userMessage2)) {
    alert('Ви ввели букви, а не число');
}
console.log(userMessage);

// 5
const country = prompt('Введіть вашу країну для доставки');
let cost;
const x = country.toLowerCase();
switch (x) {
    case 'китай' :
        cost = 100;
        break;
    
    case 'чилі' :
        cost = 250;
        break;

    case 'австралія' :
        cost = 170;
        break;

    case 'індія' :
        cost = 80;
        break;

    case 'ямайка' :
        cost = 120;
        break;

    default:
        alert(' Нажаль у вашій країні доставка недоступна')
} console.log(`Доставка в ${country} буде коштувати ${cost} кредитів`);

// 6
let input;
let total2 = 0;
do {
    input = prompt('Введіть число :');

    if (input === null) {
        break;
    }

    if (Number.isNaN(input)) {
        alert('Ви ввели букву, а не число!!!')
        continue;
    }

    total2 += input;

    console.log(input);
} while(true);

alert(`Загальна сума чисел дорівнює ${total2}`);