const inputNumRef = document.querySelector('input[type = "number"]');
const addBtnRef = document.querySelector('button[data-action="render"]');
const remBtnRef = document.querySelector('button[data-action="destroy"]');
const divBoxRef = document.querySelector("#boxes");
let divBox;


const giveValueFn = () => {
  console.log(inputNumRef.value);
  return inputNumRef.value;
};

const createBoxes = () => {
  for (let i = 0; i < giveValueFn(); i += 1) {
    divBox = document.createElement("div");
    divBox.classList.add('box')
    divBox.style.height = `${30 + (i * 10)}px`;
    divBox.style.width = `${30 + (i * 10)}px`;
    divBox.style.backgroundColor = `rgba(${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(Math.random() * (10 - 1) + 1)}`;
    divBoxRef.appendChild(divBox);
  }
};

const destroyBoxes = () => {
  [...divBoxRef.children].forEach((child) => child.remove());
};

addBtnRef.addEventListener("click", createBoxes);
remBtnRef.addEventListener("click", destroyBoxes);
inputNumRef.addEventListener("input", giveValueFn);
