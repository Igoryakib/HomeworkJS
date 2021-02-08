// 4
let heroName = '';

do {
    heroName = prompt('Ваш улюблений герой менше 6 букв ');
    console.log('Ваш герой ', heroName);
    if (heroName.length > 6) {
        console.log('Задовге імя');
        break
    }
} while (heroName.length < 6)