
const increase = document.querySelector(".inc");
const decrease = document.querySelector(".dec");
const resetle = document.querySelector(".reset");
let firstValue = 0;
const shower = document.getElementById("num");

increase.addEventListener("click", () => {
  firstValue++;
  shower.textContent = firstValue;
  if (firstValue > 0 && firstValue < 10) {
    shower.style.color = "green";
  } else if (firstValue > 10) {
    shower.style.color = "purple";
  } else if (firstValue < 0) {
    shower.style.color = "red";
  }
});

decrease.addEventListener("click", () => {
  firstValue--;
  shower.textContent = firstValue;
  if (firstValue > 0) {
    shower.style.color = "green";
  } else if (firstValue < 0) {
    shower.style.color = "red";
  }
});

resetle.addEventListener("click", () => {
  firstValue = 0;
  shower.textContent = firstValue;
});