const findBestEmployee = employees => {
    const employee = Object.entries(employees);
    let TheBestEmployee = employee[0];
    for(const item of employee) {
      if(item[1] > TheBestEmployee[1]) {
        TheBestEmployee = item;
      }
    }
    return TheBestEmployee;
};

console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux