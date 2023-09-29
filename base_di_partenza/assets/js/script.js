const head = document.querySelector("#navBar");

const changeColor = function () {
  if (window.scroll > 100) {
    head.style.backgroundColor = "#ffc017";
  } else {
    head.style.backgroundColor = "#ffffff";
  }
};
window.addEventListener("scroll", changeColor);
