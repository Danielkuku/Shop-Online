const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const mainImage = document.getElementById("mainImag");
const small = document.getElementsByClassName("small-image");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

small[0].onclick = function () {
  mainImag.src = small[0].src;
};
small[1].onclick = function () {
  mainImag.src = small[1].src;
};
small[2].onclick = function () {
  mainImag.src = small[2].src;
};
small[3].onclick = function () {
  mainImag.src = small[3].src;
};
