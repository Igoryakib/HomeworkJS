// 3
const userName = prompt('Ваше імя ?');
const userSurname = prompt('Ваше прізвище ?')
if (userName.length >= 4 && userSurname.length >= 5) {
    const x = userName.length + userSurname.length;
    console.log(x);
} else {
    console.log('Упс');
}