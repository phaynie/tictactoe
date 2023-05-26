let playerOne = true;
document.getElementById('p1').style.backgroundColor = "#fafab1";

function playerBackgroundColor() {
  if(playerOne) {
    document.getElementById('p1').style.backgroundColor = "#fafab1";
    document.getElementById('p2').style.backgroundColor = "#2o2c78";
  }else if(playerOne == false) {
    document.getElementById('p1').style.backgroundColor = "#fff";
    document.getElementById('p2').style.backgroundColor = "#fafab1";
  }
}

function validateChoice(event) {
  let validateChoice = event.target.innerHTML;
  console.log(validateChoice);
  if(validateChoice == "") {
    
  }
  return validateChoice;

}

 function getID(event) {
  let squareID = event.target.id;
  console.log(squareID);
  return squareID;

}
document.getElementById('pos1').addEventListener('click',squareClicked);
document.getElementById('pos2').addEventListener('click',squareClicked);

function squareClicked(){
  //call to a function validateChoice()
  getID();
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






