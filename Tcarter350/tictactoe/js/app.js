var tiles = document.querySelectorAll("li");
var clickCounter = 0;

for(var i=0;i<tiles.length;i++) {
  tiles[i].addEventListener('click', function() {

  //   if(clickCounter%2 === 0){
  //     this.textContent = "O";
  //   } else {
  //     this.textContent = "X";
  // }
  if(this.textContent === "") {
    clickCounter++;
  //could use ternary operator instead- good when you want to set the value of something- ie X or O
  this.textContent = clickCounter%2 === 0 ? "O" : "X";
  }
});
}
// var lines = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
//     [ 1, 4, 7 ],
//     [ 2, 5, 8 ],
//     [ 1, 5, 9 ],
//     [ 7, 5, 3 ],
//     [ 1, 5, 9 ]
// ];

//for (var i = 0; i < combinations.length; i++)

// function checkWinner()
//need to check if player has won between clicks 5-9
//win by either horizontal, vertical, or diagonal
//if they win- alert box saying winner

//needs to monitor each count 5-9 and see if the correct ordered cells are === X
// if (they are...) then {
// alert("Congratulations, you won!")
// else if (count == 9) {
//alert("it's a draw");
//}

//
// possible combinations- need to go through each array in a loop to check
// for (var i = 0; i < combinations.length; i++)

// var combinations = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
//     [ 1, 4, 7 ],
//     [ 2, 5, 8 ],
//     [ 1, 5, 9 ],
//     [ 7, 5, 3 ],
//     [ 1, 5, 9 ]
// ];
