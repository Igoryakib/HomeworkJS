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
  if (totalPrice > credits) {
    userMessage = "Недостатньо коштів на рахунку!";
  }
  if (Number.isNaN(userMessage2)) {
    alert('Ви ввели букви, а не число');
}
}
console.log(userMessage);