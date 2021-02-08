// 2
const man = 55;
if (man >= 0 && man <= 16) {
    console.log('Ви в групі діти');
} else if (man >= 17 || man <= 60) {
    console.log('Ви в групі дорослі');
} else if (man >= 61 || man <= 100) {
    console.log('Ви в групі пенсіонери');
}