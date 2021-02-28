const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
console.table(user);
// 1 додає поле mood зі значенням 'happy'
user.mood = "happy";
console.table(user);
// 2 замінює значення hobby на 'skydiving'
user.hobby = "skydiving";
console.table(user);
// 3 замінює значення premium на false
user["premium"] = false;
console.table(user);
// 3 виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const entries = Object.entries(user);

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];
  console.log(`Ключ - ${key} : Значення - ${value} `);
}
