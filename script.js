let playerOne = true;
document.getElementById('p1').style.backgroundColor = "#fafab1";

document.getElementById('pos1').addEventListener('click', squareClicked);
document.getElementById('pos2').addEventListener('click', squareClicked);
document.getElementById('pos3').addEventListener('click', squareClicked);
document.getElementById('pos4').addEventListener('click', squareClicked);
document.getElementById('pos5').addEventListener('click', squareClicked);
document.getElementById('pos6').addEventListener('click', squareClicked);
document.getElementById('pos7').addEventListener('click', squareClicked);
document.getElementById('pos8').addEventListener('click', squareClicked);
document.getElementById('pos9').addEventListener('click', squareClicked);


function playerBackgroundColor() {
  if(playerOne) {
    document.getElementById('p1').style.backgroundColor = "#fafab1";
    document.getElementById('p2').style.backgroundColor = 'white';
    
  }else if(playerOne == false) {
    document.getElementById('p1').style.backgroundColor = "#fff";
    document.getElementById('p2').style.backgroundColor = "#fafab1"; 
    
  }
 
}

function validateChoice(event) {
  let chosenSquare = document.getElementById(event.target.id)
  let squareText = event.target.innerHTML;

  if(squareText !== "X" && squareText !== "O"  && playerOne === true) {
chosenSquare.innerHTML = "X";
playerOne = false;
playerBackgroundColor();

  }else{
    if(squareText !== "X" && squareText !== "O"  && playerOne === false) {
      chosenSquare.innerHTML = "O"; 
      playerOne = true; 
      playerBackgroundColor();
   
  }
  
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

  if((elPos1.innerHTML === "X" && elPos2.innerHTML === "X" && elPos3.innerHTML === "X") || (elPos4.innerHTML === "X" && elPos5.innerHTML === "X" && elPos6.innerHTML === "X") || (elPos7.innerHTML === "X" && elPos8.innerHTML === "X" && elPos9.innerHTML === "X") || (elPos1.innerHTML === "X" && elPos4.innerHTML === "X" && elPos7.innerHTML === "X") || (elPos2.innerHTML === "X" && elPos5.innerHTML === "X" && elPos8.innerHTML === "X") || (elPos3.innerHTML === "X" && elPos6.innerHTML === "X" && elPos9.innerHTML === "X") || (elPos1.innerHTML === "X" && elPos5.innerHTML === "X" && elPos9.innerHTML === "X") || (elPos3.innerHTML === "X" && elPos5.innerHTML === "X" && elPos7.innerHTML === "X")) {
    document.getElementById('p1').innerHTML = "Player One - You are the Winner!";

  }else if((elPos1.innerHTML === "O" && elPos2.innerHTML === "O" && elPos3.innerHTML === "O") || (elPos4.innerHTML === "O" && elPos5.innerHTML === "O" && elPos6.innerHTML === "O") || (elPos7.innerHTML === "O" && elPos8.innerHTML === "O" && elPos9.innerHTML === "O") || (elPos1.innerHTML === "O" && elPos4.innerHTML === "O" && elPos7.innerHTML === "O") || (elPos2.innerHTML === "O" && elPos5.innerHTML === "O" && elPos8.innerHTML === "O") || (elPos3.innerHTML === "O" && elPos6.innerHTML === "O" && elPos9.innerHTML === "O") || (elPos1.innerHTML === "O" && elPos5.innerHTML === "O" && elPos9.innerHTML === "O") || (elPos3.innerHTML === "O" && elPos5.innerHTML === "O" && elPos7.innerHTML === "O")) {
    document.getElementById('p2').innerHTML = "Player Two - You are the Winner!";
  }
}
  




function squareClicked(event){
  //call to a function validateChoice()
  validateChoice(event);
  //put x or o in square

  //check to see if they won
  isThereAWinner();
 
  
}






