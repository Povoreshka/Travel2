const btnOpen = document.querySelector(".button");
const modal = document.querySelector(".modal")

const modalViewHandler = ()=>{
    modal.classList.toggle('modal--open')
}

btnOpen.addEventListener('click', modalViewHandler);
modal.addEventListener('click', modalViewHandler);