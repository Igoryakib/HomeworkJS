const CategoriesRef = document.querySelector('#categories');
const ArrCategoriesRef = CategoriesRef.children;
console.log(`У списку ${ArrCategoriesRef.length} категорії.`);

const ArrItemctagoryRef = document.querySelectorAll('.item');

for(let i = 0; i < ArrItemctagoryRef.length; i +=1) {
    const CategoriesSortFunction = item => {
        const ItemFirstChild = item.firstElementChild;
        const ItemLastChild = item.lastElementChild;
        return `Категорія: ${ItemFirstChild.textContent}, Кількість елементів: ${ItemLastChild.children.length}`;
    };
    console.log(CategoriesSortFunction(ArrItemctagoryRef[i]));
}