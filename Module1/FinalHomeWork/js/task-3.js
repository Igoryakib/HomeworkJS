// 3
const ADMIN_PASSWORD = "jqueryismyjam";
let message;

message = prompt("Ваш пароль -?");
if (message === ADMIN_PASSWORD) {
  message = "Ласкаво просимо";
} else if (message === null) {
  message = "Скасовано користувачем!";
} else if (message !== ADMIN_PASSWORD) {
  message = "Доступ заборонений, невірний пароль!";
}
alert(message);
