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
