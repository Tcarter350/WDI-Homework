var humScore = document.getElementById('humanScore');
var compScore = document.getElementById('computerScore');
var options = document.querySelectorAll("button");
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
//var updateScore =

var computerChoice = Math.random();
var clickCounter = 0;

options.addEventListener('click', function() {

  if(this.textContent === "") {
    clickCounter++;
    this.textContent = clickCounter%2 === 0 ? computerChoice : humanChoice;
      }
    });

 if(computerChoice<=0.33) {
   computerChoice = "rock";
 }
  else if(0.34<=computerChoice<=0.66)  {
    computerChoice = "paper";
  }
  else {
    computerChoice = "scissors";

}

Switch(true) {
  case :  computerChoice === "rock" && humChoice === "paper":
    console.log("You win!");
      break;
  case:   computerChoice === "rock" && humChoice === "scissors":
    console.log("Computer wins!");
      break;
  case: computerChoice === "paper" && humChoice === "rock":
    console.log("Computer Wins!");
      break;
  case: computerChoice === "paper" && humChoice === "scissors";
    console.log("You Win!");
      break;
  case: computerChoice === "scissors" && humChoice === "paper";
    console.log("Computer Wins!");
      break;
  case: computerChoice === "scissors" && humChoice === "rock";
    console.log("you Win!");
      break;
  default:
    console.log("It's a tie!");
            }
