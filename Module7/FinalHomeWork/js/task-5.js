const inputTextRef = document.querySelector('#name-input');
const spanOutputRef = document.querySelector('#name-output');

const writeNameFn = () => {
    spanOutputRef.textContent = inputTextRef.value;
    if(spanOutputRef.textContent === '') {
        spanOutputRef.textContent = 'незнайомець';
    }
};

inputTextRef.addEventListener('input', writeNameFn)