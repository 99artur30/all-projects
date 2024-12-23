// let decrease = document.querySelector("#decrease");
// let reset = document.querySelector("#reset");
// let increase = document.querySelector("#increase");
// let number = 

// decrease.addEventListener("click", ( =>{

// }))
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
        }        
        else if (styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
    });
});
