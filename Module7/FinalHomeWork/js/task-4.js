const btnAddRef = document.querySelector('button[data-action="increment"]');
const btnRemRef = document.querySelector('button[data-action="decrement"]');
const spanValueRef = document.querySelector('#value');
let counterValue = 0;

const increment = () => spanValueRef.textContent = counterValue +=1;

const decrement = () => spanValueRef.textContent = counterValue -=1;

btnAddRef.addEventListener('click', increment);

btnRemRef.addEventListener('click', decrement);