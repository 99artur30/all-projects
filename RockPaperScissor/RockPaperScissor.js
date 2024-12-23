var player1 = [];
var player2 = [];
addEventListener("click", function (event) { });
onclick = function (event) { };
function gameStart() {
    var choice = document.querySelectorAll("input");
    choice.forEach(function (element) {
        var value = element.value;
        console.log(value);
    });
    var valueRock = document.getElementById('rock');
    var rock = valueRock.value;
    console.log(rock);
    var valuePaper = document.getElementById('paper');
    var valueScissor = document.getElementById('scissor');
}
;
gameStart();
// function playerTurn() {
//     const turn: boolean = true;
//     const playerOne = document.getElementById('turn') as HTMLInputElement;
//     onclick = () => ; 
//     if(turn) {
//     }
// }
// function getValue() {
//     const getValue = document.getElementById('turn') as HTMLInputElement;
//     const inputValue = getValue?.value;
//     console.log(inputValue);
//     // const result = inputValue?.value;
// };
// getValue();
