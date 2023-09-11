let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
function generateColor() {
  let a, b, c;
  a = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  c = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgba(${a},${b},${c})`;
  code = document.getElementById(
    "color-code"
  ).innerText = `rgba(${a},${b},${c})`;
}
btn.addEventListener("click", () => {
  generateColor();
});
let code;
btn1.addEventListener("click", () => {
  navigator.clipboard.writeText(code);
  alert("Your copied code is :" + code);
});
generateColor();
