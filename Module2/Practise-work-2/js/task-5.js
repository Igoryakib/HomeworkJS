const myAverageScore = function (arrays) {
  let mainMark = 0;
  let total = 0;
  for(let i = 0; i < arrays.length; i += 1) {
    mainMark += arrays[i];
  }
  total = mainMark / arrays.length;

  if (total >= 91 && total <= 100) {
    const result = `Ваш середній бал ${total} і ваша оцінка Myaveragescore: A`;
    return result;
  }

  if (total >= 81 && total <= 90) {
    const result = `Ваш середній бал ${total} і ваша оцінка Myaveragescore: B`;
    return result;
  }

  if (total >= 71 && total <= 80) {
    const result = `Ваш середній бал ${total} і ваша оцінка Myaveragescore: C`;
    return result;
  }

  if (total <= 70) {
    const result = `Ваш середній бал ${total} і ваша оцінка Myaveragescore: D`;
    return result;
  }
};

const reslt1 = myAverageScore([100, 75, 81, 96]);
console.log(reslt1);
const reslt2 = myAverageScore([45, 63, 85, 70]);
console.log(reslt2);
const reslt3 = myAverageScore([77, 82, 60, 58]);
console.log(reslt3);
const reslt4 = myAverageScore([93, 99, 93, 96]);
console.log(reslt4);
