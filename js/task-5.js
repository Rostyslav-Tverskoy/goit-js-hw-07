
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bck = document.querySelector("body");
const btn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
btn.addEventListener("click", () => {
  const randomcolor = getRandomHexColor();
  bck.style.backgroundColor = randomcolor;
  colorSpan.textContent = randomcolor;

});

