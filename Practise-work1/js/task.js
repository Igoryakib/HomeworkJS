const uniqueLetters = (item) => {
  const itemArr = item.split("");
  let emptyArr = [];
  for(let i = 0; i < itemArr.length; i +=1) {
    if(emptyArr.includes(itemArr[i])) {
      return false;
      
    }
    emptyArr.push(itemArr[i])
  }
  return true;
};

const sortFunction = item => {
  const itemArr = item.split('');
  const result = itemArr.reduce((acc, value) => {
    if(!acc.hasOwnProperty(value)) {
      acc[value] = 0;
    }
    acc[value] += 1;
    return acc;
  }, {})
  return result;
};

console.log(uniqueLetters("hello")); // false
console.log(uniqueLetters("wolrd")); // true
console.log(uniqueLetters("paradise")); // false


console.log(sortFunction("hello")); 
console.log(sortFunction("wolrd")); 
console.log(sortFunction("paradise"));



// 1. Створити масив зі строки
// 2. Використовую for для перебору масиву. Тобто я маю в циклі на кожній ітерації окрему літеру.
// 3. Що я можу з цим зробити?
// 4.


