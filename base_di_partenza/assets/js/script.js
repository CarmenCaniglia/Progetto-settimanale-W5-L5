window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navBar");
  const button = document.getElementsByClassName("started")[0];
  if (this.window.scrollY > 455) {
    navbar.style.backgroundColor = "white";
    button.style.backgroundColor = "#1a8917";
  } else {
    navbar.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "#191919";
  }
});

const emme = () => {
  const elements0 = document.querySelectorAll("svg > g > g > g[opacity = '0']");
  const elements1 = document.querySelectorAll("svg >g > g > g[opacity='1']");

  let rnd = Math.floor(Math.random() * elements0.length);
  elements0[rnd].setAttribute("opacity", "1");

  rnd = Math.floor(Math.random() * elements1.length);
  elements1[rnd].setAttribute("opacity", "0");
};
setInterval(emme, 200);
