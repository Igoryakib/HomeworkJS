const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
const values = Object.values(salaries);

for(const item of values) {
    sum += item;
}

console.log('Сума зарплат -', sum);
