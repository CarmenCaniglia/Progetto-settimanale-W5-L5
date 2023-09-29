const head = document.getElementById("navBar");
const button = document.getElementsByClassName("started")[0];

const changeColor = function () {
  let scroll = window.scrollY;
  let limes = 700;
  if (scroll >= limes) {
    head.classList.add("cambioColore");
  } else if (scroll >= limes) {
    button.style.backgroundColor = "#1a8917";
  } else {
    head.classList.remove("cambioColore");
  }
};
window.addEventListener("scroll", changeColor);
