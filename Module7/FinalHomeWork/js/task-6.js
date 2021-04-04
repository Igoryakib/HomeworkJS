const inputRef = document.querySelector("#validation-input");
const inputLength = inputRef.getAttribute("data-length");

const validFn = () => {
  if (inputRef.value.length === +inputLength) {
    console.log(inputRef.value.length);
    inputRef.classList.remove("invalid");
    return inputRef.classList.add("valid");
  }
   if (inputRef.value.length !== +inputLength) {
    inputRef.classList.remove("valid");
    return inputRef.classList.add("invalid");
   }
};

inputRef.addEventListener("blur", validFn);
