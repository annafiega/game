const stats = {
  win:0, lose:0, tie:0, round:0
}

function handleButtonClick(selectedOption) {
  document.getElementById(
    "userChoice"
  ).innerText = `You selected: ${selectedOption}`;
  const computerChoice = generateComputerChoice();
  document.getElementById(
    "computerChoice"
  ).innerText = `Computer selected: ${computerChoice}`;
  const result = compareTheResults(selectedOption, computerChoice);
  document.getElementById("result").innerText = ` ${result}`;
  document.getElementById("win").innerText=`WIN : ${stats.win}`;
  document.getElementById("lose").innerText=`LOSE : ${stats.lose}`;
  document.getElementById("ties").innerText=`TIES : ${stats.tie}`;
  document.getElementById("round").innerText=`ROUND : ${stats.round}`;

}

function generateComputerChoice() {
  const possibleOptions = ["rock", "paper", "scissors"];
  const drawIndex = Math.floor(Math.random() * 3);
  const drawElement = possibleOptions[drawIndex];
  return drawElement;
}

function compareTheResults(userChoice, computerChoice) {
  stats.round++;
  if (userChoice === computerChoice) {
    stats.tie++;    
    return "You tie";
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      stats.win++;
            return "You win";
    } else {
      stats.lose++;
      return "You lose" ;
    }
  }
  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      stats.win++;
      return "You win" ;
    } else {
      stats.lose++;
      return "You lose " ;
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      stats.lose++;
      return "You lose";
    } else {
      stats.win++;
      return "You win";
    }
  }
}


