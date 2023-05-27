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
  }else{
    if(squareText !== "X" && squareText !== "O"  && playerOne === false) {
      chosenSquare.innerHTML = "O"; 
      playerOne = true;  
  }
}
  return

}

 




function squareClicked(event){
  //call to a function validateChoice()
  validateChoice(event);
  //put x or o in square

  //check to see if they won
  //change player
  //change color
  if(playerOne){
    document.getElementById(squareID).innerHTML = "X";
    playerOne = false;
    playerBackgroundColor();
  }else if(playerOne == false) {
    document.getElementById(squareID).innerHTML = "O";
    playerOne = true;
    playerBackgroundColor();
  }
    return
  
}






