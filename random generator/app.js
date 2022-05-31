const generator = document.getElementById("generate");
let shower = document.getElementById("number");
// const reset = document.getElementsByClassName("btn2")[0];

generator.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 1000) + 1;
  shower.innerHTML = randomNumber;
});


// reset.addEventListener("click" , () => {
//     let resetle  = 0;
//     shower.innerHTML = resetle;
      
// })