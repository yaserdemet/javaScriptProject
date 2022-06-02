// DOM işlemleri (sıradaki JS konusu)
// Add the CroCoder logo (image element) as a child element to the existing div element.
const imageSrc = 'https://crocoder.dev/icon.png';
// querySelector, createElement, appendChild ile çözülecek
const div = document.querySelector('.div');
const imgElement = document.createElement('img');
// imgElement.setAttribute("src" , imageSrc);   // ?  setAttribute ile özellik atama yapılır.
imgElement.src = imageSrc;                      // ! src ile özellik atama yapılır.
div.appendChild(imgElement);                    // ! appendChild ile div'e imgElement'i ekler.

imgElement.classList.add('img-class');
// imgElement.className  = "yeni"

// console.log(imgElement);