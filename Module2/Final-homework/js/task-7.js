const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const addLogin = function (allLogins, login) {
  if (login.length > 16 || login.length < 4) {
    console.log("Помилка! Логін повинен бути від 4 до 16 символів");
    return;
  }

  if (allLogins.includes(login)) {
    console.log("Такий логін уже використовується!");
    return;
  }

  allLogins.push(login);
  console.log("Логін успішно доданий!");
  return allLogins;
};

console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'