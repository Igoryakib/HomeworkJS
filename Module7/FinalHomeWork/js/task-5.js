const inputTextRef = document.querySelector('#name-input');
const spanOutputRef = document.querySelector('#name-output');

const writeNameFn = () => {
    if(spanOutputRef.textContent === '') {
        spanOutputRef.textContent = 'незнайомець';
    }
    spanOutputRef.textContent = inputTextRef.value
};

inputTextRef.addEventListener('input', writeNameFn)