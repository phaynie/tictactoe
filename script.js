

let playerOne = true;
document.getElementById('p1').style.backgroundColor = "var(--yellow)";

const squares = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5', 'pos6', 'pos7', 'pos8', 'pos9',];

squares.forEach((square) =>{
  document.getElementById(square).addEventListener('click', squareClicked);
});





function playerBackgroundColor() {
  if(playerOne) {
    document.getElementById('p1').style.backgroundColor = "var(--yellow)";
    document.getElementById('p2').style.backgroundColor = "var(--ltGrey)";
    
  }else if(playerOne == false) {
    document.getElementById('p1').style.backgroundColor = "var(--ltGrey)";
    document.getElementById('p2').style.backgroundColor = "var(--yellow)"; 
    
  }
 
}

function validateChoice(event) {
  let chosenSquare = document.getElementById(event.target.id)
  let squareText = event.target.innerHTML;

  if(squareText !== "X" && squareText !== "O"  && playerOne === true) {
    chosenSquare.innerHTML = "X";
    playerOne = false;
    playerBackgroundColor();

  }else if(squareText !== "X" && squareText !== "O"  && playerOne === false) {
      chosenSquare.innerHTML = "O"; 
      playerOne = true; 
      playerBackgroundColor();
  }
  
}

function isThereAWinner() {
  let elPos1 = document.getElementById('pos1');
  let elPos2 = document.getElementById('pos2');
  let elPos3 = document.getElementById('pos3');
  let elPos4 = document.getElementById('pos4');
  let elPos5 = document.getElementById('pos5');
  let elPos6 = document.getElementById('pos6');
  let elPos7 = document.getElementById('pos7');
  let elPos8 = document.getElementById('pos8');
  let elPos9 = document.getElementById('pos9');

  if(
    (elPos1.innerHTML === "X" && elPos2.innerHTML === "X" && elPos3.innerHTML === "X")
     || (elPos4.innerHTML === "X" && elPos5.innerHTML === "X" && elPos6.innerHTML === "X") 
     || (elPos7.innerHTML === "X" && elPos8.innerHTML === "X" && elPos9.innerHTML === "X") 
     || (elPos1.innerHTML === "X" && elPos4.innerHTML === "X" && elPos7.innerHTML === "X") 
     || (elPos2.innerHTML === "X" && elPos5.innerHTML === "X" && elPos8.innerHTML === "X") 
     || (elPos3.innerHTML === "X" && elPos6.innerHTML === "X" && elPos9.innerHTML === "X") 
     || (elPos1.innerHTML === "X" && elPos5.innerHTML === "X" && elPos9.innerHTML === "X") 
     || (elPos3.innerHTML === "X" && elPos5.innerHTML === "X" && elPos7.innerHTML === "X")
     )
  {
    document.getElementById('p1h').innerHTML = "Player One - You are the Winner!";
    document.getElementById('p1h').classList.add("blink");
    document.getElementById('p1').style.backgroundColor = "var(--yellow)";
    document.getElementById('p2').style.display = "none";
  
    removeEventListeners();

  }else if(
    (elPos1.innerHTML === "O" && elPos2.innerHTML === "O" && elPos3.innerHTML === "O") 
    || (elPos4.innerHTML === "O" && elPos5.innerHTML === "O" && elPos6.innerHTML === "O") 
    || (elPos7.innerHTML === "O" && elPos8.innerHTML === "O" && elPos9.innerHTML === "O") 
    || (elPos1.innerHTML === "O" && elPos4.innerHTML === "O" && elPos7.innerHTML === "O") 
    || (elPos2.innerHTML === "O" && elPos5.innerHTML === "O" && elPos8.innerHTML === "O") 
    || (elPos3.innerHTML === "O" && elPos6.innerHTML === "O" && elPos9.innerHTML === "O") 
    || (elPos1.innerHTML === "O" && elPos5.innerHTML === "O" && elPos9.innerHTML === "O") 
    || (elPos3.innerHTML === "O" && elPos5.innerHTML === "O" && elPos7.innerHTML === "O")
    ) 
  {
    document.getElementById('p2h').innerHTML = "Player Two - You are the Winner!";
    document.getElementById('p2h').classList.add("blink");
    document.getElementById('p2').style.backgroundColor = "var(--yellow)";
    document.getElementById('p1').style.display = "none";
    removeEventListeners();

  }else if(
    (
      (elPos1.innerHTML === "X" || elPos1.innerHTML === "O") 
      && (elPos2.innerHTML === "X" || elPos2.innerHTML === "O") 
      && (elPos3.innerHTML === "X" || elPos3.innerHTML === "O") 
      && (elPos4.innerHTML === "X" || elPos4.innerHTML === "O") 
      && (elPos5.innerHTML === "X" || elPos5.innerHTML === "O") 
      && (elPos6.innerHTML === "X" || elPos6.innerHTML === "O") 
      && (elPos7.innerHTML === "X" || elPos7.innerHTML === "O") 
      && (elPos8.innerHTML === "X" || elPos8.innerHTML === "O") 
      && (elPos9.innerHTML === "X" || elPos9.innerHTML === "O") 
    )) 
  {
    document.getElementById('p2h').innerHTML = " Bummer, No Winner!";
    document.getElementById('p2h').classList.add("blink");
    document.getElementById('p2').style.backgroundColor = "var(--pink)";
    document.getElementById('p1').style.display = "none";
    removeEventListeners();
  }
  
}
  
function removeEventListeners() {
  squares.forEach((square) =>{
    document.getElementById(square).removeEventListener('click', squareClicked);
  });
 

  gameOverPlayAgain();
}

function gameOverPlayAgain () {
  gameOverElem = document.getElementById('gameOver');
  gameOverElem.classList.add('gameOver')
  gameOverElem.innerHTML = "Game Over!"

  playAgainEl = document.getElementById('playAgain');
  playAgainEl.style.display='block';
  playAgainEl.addEventListener('click', newGame);
}

function newGame(event) {
  playerOne = true;
  document.getElementById('p1').style.backgroundColor = "var(--yellow)";
  document.getElementById('p1h').innerHTML="Player One";
  document.getElementById('p1h').classList.remove("blink");
  document.getElementById('p1').style.display="block"
  document.getElementById('p2').style.backgroundColor = "var(--ltGrey)";
  document.getElementById('p2h').innerHTML="Player Two";
  document.getElementById('p2h').classList.remove("blink");
  document.getElementById('p2').style.display="block";
  
  squares.forEach((square) =>{
    document.getElementById(square).addEventListener('click', squareClicked);
    document.getElementById(square).innerHTML='&nbsp';
  });
  
  gameOverElem = document.getElementById('gameOver');
  gameOverElem.classList.remove('gameOver')
  gameOverElem.innerHTML = "&nbsp"
  playAgainEl = document.getElementById('playAgain');
  playAgainEl.style.display='none';
  
}

function squareClicked(event){
  //call to a function validateChoice()
  validateChoice(event);
  //put x or o in square

  //check to see if they won
  isThereAWinner();
}






