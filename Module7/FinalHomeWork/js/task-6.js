const inputRef = document.querySelector("#validation-input");
const inputLength = inputRef.getAttribute("data-length");

const validFn = () => {
  if (inputRef.value.length === +inputLength) {
    console.log(inputRef.value.length);
    return inputRef.classList.add("valid");
  }
   inputRef.classList.add("invalid");
};

inputRef.addEventListener("blur", validFn);
