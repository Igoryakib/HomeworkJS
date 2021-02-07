'use strict';

const style = ['Джаз', 'Блюз'];
console.log('Масив', style);
style.push('Рок-н-ролл');
console.log('Масив онолений', style);
style.splice(1, 1, 'Класика');
console.log('Масив з змінами', style);
style.shift();
console.log('Масив з 1 видаленням', style);
style.unshift('Реп', 'Реггі');
console.log('Фінальний масив', style);