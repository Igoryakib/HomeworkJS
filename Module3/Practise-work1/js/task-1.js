// 1  Створи пустий об'єкт user
const user = {};
// 2 Додай в об'єкт властивість userName зі своїм іменем
user.userName = 'Igor'; 
// 3 Додай в об'єкт властивість age зі своїм віком
user.age = 14;
// 4 Додай в об'єкт метод showUserName, який виводить твоє ім'я
user.showUserName = function() {
    console.log(this.userName);
};
// 5 Додай в об'єкт метод updateAge, який додає під час виклику до твоєго віку 1. 
user.updateAge = function() {
   const result =  this.age += 1;
   return result;
};

console.log(user);
user.showUserName();
console.log(user.updateAge());