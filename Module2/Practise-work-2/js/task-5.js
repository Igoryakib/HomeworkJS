const myAverageScore = function (arrays) {
  const mainMark = (arrays[0] + arrays[1] + arrays[2] + arrays[3]) / 4;

  if (mainMark >= 91 && mainMark <= 100) {
    const result = `Ваш середній бал ${mainMark} і ваша оцінка Myaveragescore: A`;
    return result;
  }

  if (mainMark >= 81 && mainMark <= 90) {
    const result = `Ваш середній бал ${mainMark} і ваша оцінка Myaveragescore: B`;
    return result;
  }

  if (mainMark >= 71 && mainMark <= 80) {
    const result = `Ваш середній бал ${mainMark} і ваша оцінка Myaveragescore: C`;
    return result;
  }

  if (mainMark <= 70) {
    const result = `Ваш середній бал ${mainMark} і ваша оцінка Myaveragescore: D`;
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
