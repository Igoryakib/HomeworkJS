const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

  const ulIngredientsRef = document.querySelector('#ingredients');
  for(let i = 0; i < ingredients.length; i += 1) {
    const liItemRef = document.createElement('li');
    const apendFn = (itemLi, itemUl) => {
        itemLi.textContent = ingredients[i];
        return itemUl.appendChild(itemLi)
    };
    console.log(apendFn(liItemRef, ulIngredientsRef))
  }
  