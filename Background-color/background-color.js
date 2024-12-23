const colors = ["green", "blue","#6610f2", "#ffc107"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
  const randomNumber = getRandomNumber();
  document.getElementById("overlay").style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
} 