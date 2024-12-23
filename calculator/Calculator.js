function getButton(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  var display = document.getElementById('display');
  var result = eval(display.value);
  display.value = result;
}

function clearValue() {
  document.getElementById('display').value = '';
}

// let display = document.getElementById('display');

// function getNumbers() {
//   let buttons = document.querySelectorAll("button");  
//   let values = [];
  
//   buttons.forEach(function(button) {
//     values.push(button.textContent);  
//   });
  
//   console.log(values);
//   display.innerHTML = values.join(", ");
// }

// let display = document.getElementById('display');
// function getNumbers() {
//     let button = document.querySelectorAll("button").value;  
//     console.log(button);
//     display.innerHTML = button;
// }

// function getNumber () {
//     let buttonValue = document.querySelectorAll('button');
//     console.log(buttonValue);
//     buttonValue.addEventListener (

//     )
// }
// getNumber();
// const btn = document.querySelectorAll(".z")
// console.log(btn);
// const values = [];
// btn.forEach((element) => {
//     values.push(element.value);
// });
// console.log(values);
// btn.forEach((item) => {
//     let clickEvent = () => {
//         document.getElementById("display").innerHTML = item;
//     } 
//     item.addEventListener('click',clickEvent);

    
// });
// function getelement() {
//     document.getElementById("display").innerHTML = btn;
//     console.log("test");
// }

// var display = document.querySelector(".display");
// let content = display.insertAdjacentHTML(afterbegin, );