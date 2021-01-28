"use strict";

// 1
const userNumber = prompt("Your number in diapason 55-99");
if (userNumber >= 55 && userNumber <= 99) {
  console.log("Число потрапляє в діапазон");
} else {
  console.log("Число не потрапляє в діапазон");
}

// 2
const man = 55;
if (man >= 0 && man <= 16) {
    console.log('Ви в групі діти');
} else if (man >= 17 || man <= 60) {
    console.log('Ви в групі дорослі');
} else if (man >= 61 || man <= 100) {
    console.log('Ви в групі пенсіонери');
}

// 3
const userName = prompt('Ваше імя ?');
const userSurname = prompt('Ваше прізвище ?')
if (userName.length >= 4 && userSurname.length >= 5) {
    const x = userName.length + userSurname.length;
    console.log(x);
} else {
    console.log('Упс');
}

// 4
const y = Math.round(Math.random() * (5 - 1) + 1);
if (y === 1 || y === 2 || y === 3 || y === 4 || y ===5) {
    console.log(y, 'Ура ви виграли мільйон');
} else {
    console.log(y, 'Ура ви виграли 5 гривень');
}

// 5
const lang = prompt('Ваша мова ?');
let month;
switch (lang) {
    case 'ua' :
        month = 'Січень'
        console.log(month)
        break;

    case 'en' :
        month = 'January'
        console.log(month)
        break;

    case 'ru' : 
    month = 'Январь'
    console.log(month)
    break;

    case 'fr' :
    month = 'Janvier'
    console.log(month)
    break;
}