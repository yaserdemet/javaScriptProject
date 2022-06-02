// DOM işlemleri (sıradaki JS konusu)
// Change the text in the first and the last list item element in every unordered list element on this page. Change it to 'first' and 'last'.
// querySelectorAll, Pseudo Elements ve forEach kullanarak çözülecek

const li = document.querySelectorAll("ul > li:first-child"); // ! querySelectorAll ile array metotları kullanılır.
const li2 = document.querySelectorAll("ul > li:last-child");

li.forEach((x) => {
  x.textContent = "first";
});



li2.forEach((x) => {
  x.textContent = "last";
});
