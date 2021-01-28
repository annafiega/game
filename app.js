function handleButtonClick(selectedOption) {
  console.log(`You selected: ${selectedOption}`);
  document.getElementById(
    "userChoice"
  ).innerText = `You selected: ${selectedOption}`;
  const computerChoice = generateComputerChoice();
  document.getElementById(
    "computerChoice"
  ).innerText = `Computer selected: ${computerChoice}`;
  const result = compareTheResults(selectedOption, computerChoice);
  document.getElementById("result").innerText = ` ${result}`;
}
function generateComputerChoice() {
  const possibleOptions = ["rock", "paper", "scissors"];
  const drawIndex = Math.floor(Math.random() * 3);
  const drawElement = possibleOptions[drawIndex];
  return drawElement;
}

function compareTheResults(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    //draw
    return "Draw";
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win";
    } else {
      return "You lose";
    }
  }
  if (userChoice === "rock") {
    if(computerChoice==="scissors"){
      return "You win";
    }else{
      return "You lose"
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice==="rock"){
      return "You lose";
    }else{
      return "You win";
    }
  }
}

/*const gameScenarios = {
  paparpaper: "draw",
};*/
