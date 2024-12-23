// const playerOneName = "tim";
// const playerTwoName = "jenn";
// const playerOneMarker = "X";
// const playerTwoMarker = "O";

// const playerOne = {
//   name: "tim",
//   marker: "X"
// };

// const playerTwo = {
//   name: "jenn",
//   marker: "O"
// };

// // function printName(player) {
// //     console.log(player.name)
// // };

// // printName();

// function player(name, marker) {

//     this.name = name;
//     this.marker = marker;
// }
// const playerthree = new player("I","0");
//   console.log(playerthree.name);

//   function Player(name, marker) {
//     this.name = name
//     this.marker = marker
//     this.sayName = function() {
//       console.log(name)
//     }
//   }
  
//   const player1 = new Player('steve', 'X')
//   const player2 = new Player('also steve', 'O')
//   player1.sayName() // logs 'steve'
//   player2.sayName() // logs 'also steve  

// const book = {
//     title: "The Hobbit",
//     author: " by J.R.R Tolkien",
//     pages: ", 295 pages",
//     read: ", not read yet",
//     info: function() {
//         return this.title + this.author + this.pages + this.read;
//     }
// }

// console.log(book.info());

// Object.getPrototypeOf(player1) === Player.prototype // returns true
// Object.getPrototypeOf(player2) === Player.prototype // returns true

// function digitize(n) {

//   const digits = String(n).split('').map(Number).reverse();
//   // let digits = n.toString().split('');
//   // digits.reverse();
//   // const num = digits.map(Number);
//   console.log(digits);
// }
// digitize(321215);

// function past(h, m, s){
//   h = h * 3600000;
//   m = m * 60000;
//   s = s * 1000;
//   const result = h + m + s;
//   console.log(result)
// }
// past(0, 2, 10)

const myLibrary = [];
function book(name, author, pages) {
  this.name = name,
  this.author = author,
  this.pages = pages;
}

const myBook = new book("hobbit","tolkien", 100);

function addBookToLibrary() {
  myLibrary.push(myBook);  
}
addBookToLibrary();

function cardLoop() {
  const card = document.getElementsByClassName('card-title');
  card.push(myBook.name)
}