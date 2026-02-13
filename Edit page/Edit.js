const resultEl = document.querySelector("#result");
const cartEl = document.querySelector(".menu");
const bodyEl = document.body;


 resultEl.textContent = document.activeElement.tagName;


 const add = () => {
  cartEl.classList.add("menu-dark");
  bodyEl.classList.add("light-bg");
};

const remove = ()=>{
    cartEl.classList.remove("menu-dark")
    bodyEl.classList.remove("light-bg")
}
