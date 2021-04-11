import gallery from "./gallery-items.js";
const ulRef = document.querySelector(".js-gallery");
let liRef;
let aRef;
let imgRef;
const modalWindow = document.querySelector(".js-lightbox");
const modalImgRef = document.querySelector(".lightbox__image");
const closeBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const backDropRef = document.querySelector(".lightbox__overlay");

const createElementsFn = (item) => {
  const result = item.map((item, idx) => {
    liRef = document.createElement("li");
    liRef.classList.add("gallery__item");
    aRef = document.createElement("a");
    aRef.classList.add("gallery__link");
    aRef.setAttribute("href", item.original);
    aRef.setAttribute("target", "_blank");
    imgRef = document.createElement("img");
    imgRef.classList.add("gallery__image");
    imgRef.setAttribute("src", item.preview);
    imgRef.setAttribute("data-source", item.original);
    imgRef.setAttribute("alt", item.description);
    aRef.setAttribute('data-index', idx);
    imgRef.setAttribute('data-index', idx);
    aRef.appendChild(imgRef);
    liRef.append(aRef);
    return ulRef.appendChild(liRef);
  });
  return result;
};

console.log(createElementsFn(gallery));


const keyNextPictureFn = (event) => {
    if (event.code === 'ArrowRight') {
       const nextImg = document.querySelector(`[data-index = '${+event.target.dataset.index + 1}']`);
      return  modalImgRef.setAttribute('src', nextImg.getAttribute('data-source'));
    }

    if (event.code === 'ArrowLeft') {
      const nextPicture = +event.target.dataset.index - 1;
        if (nextPicture === -1) {
          const lastImg = document.querySelector(`img[data-index = '8']`);
          return modalImgRef.setAttribute('src', lastImg.getAttribute('data-source'));
        }
        const previousImg = document.querySelector(`img[data-index = '${+event.target.dataset.index - 1}']`);
       modalImgRef.setAttribute('src', previousImg.getAttribute('data-source'));
    }
};


const openModal = (event) => {
  event.preventDefault();
  modalWindow.classList.add("is-open");
  modalImgRef.setAttribute('src', event.target.getAttribute('data-source'));
  modalImgRef.setAttribute('alt', event.target.getAttribute('alt'));
  window.addEventListener("keydown", keyCloseModal);
  window.addEventListener('keydown', keyNextPictureFn);
};

const closeModal = () => {
  modalWindow.classList.remove("is-open");
  modalImgRef.removeAttribute("src");
  window.removeEventListener("keydown", keyCloseModal);
  window.removeEventListener('keydown', keyNextPictureFn)
};

const backdropCloseModal = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const keyCloseModal = (event) => {
  if (event.code === "Escape") {
    closeModal();
  }
};

ulRef.addEventListener("click", openModal);
closeBtnRef.addEventListener("click", closeModal);
backDropRef.addEventListener("click", backdropCloseModal);
