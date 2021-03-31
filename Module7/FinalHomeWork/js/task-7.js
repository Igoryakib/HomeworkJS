const inputControlRef = document.querySelector('#font-size-control');
const spantTextRef = document.querySelector('#text');

const doingMahicFn = () => {
    console.log(inputControlRef.value);
    return spantTextRef.style.fontSize = `${inputControlRef.value}px`;
};


inputControlRef.addEventListener('input', doingMahicFn)