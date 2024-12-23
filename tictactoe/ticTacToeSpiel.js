const btn = document.querySelectorAll('.btn')
let player = 0
const X = [];
const O = [];
const list =[[1,2,3],[1,4,7]];
btn.forEach(function (i) {
    i.addEventListener('click', function () {
        if (!i.classList.contains("used")){
            i.classList.add("used");
            player = player +1
            if (player % 2) {
                i.innerHTML = "X";
                X.push(i.id)
            }
            else {
                i.innerHTML = "O";
                O.push(i.id)
            }
        }
        console.log(X)
        let win = 0
        list.forEach((element) => {
            // console.log("erste schleife" + element)
            // element.forEach((number) => {
                // console.log("nummer" + number)
        console.log(X)
        console.log(element)
        if (X.includes(element)) {
            win++
            console.log("zweite schleife" + number)
            console.log("win" + win);
        }
        if (win == 1) {
            console.log("player won");
        }    
    });
});
});
    