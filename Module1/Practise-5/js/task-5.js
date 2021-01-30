'use strict';

// 1
for (let i = 1; i <= 10; i += 1) {
    console.log('Your number', i);
}

// 2
for (let i = 1; i <= 10; i += 1) {
    if (i % 2 === 0) {
        console.log('Парне число -', i);
    }

    if (i % 2 === 1) {
        console.log('Непарне число -', i);
    }
}

// 3
let num = 20;
let i = 1;

while (num < 28) {
    num += i;
    console.log(num);
}

// 4
let heroName = '';

do {
    heroName = prompt('Ваш улюблений герой менше 6 букв ');
    console.log('Ваш герой ', heroName);11
    if (heroName.length > 6) {
        console.log('Задовге імя');
        break
    }
} while (heroName.length < 6)







