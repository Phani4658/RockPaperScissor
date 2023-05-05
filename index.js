const rockBtn = document.getElementById('rockButton');
const paperBtn = document.getElementById('paperButton');
const scissorBtn = document.getElementById('scissorButton');
const resultContainer = document.getElementById("result");
let userScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissor"];
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
  return computerChoice;
};

const playRound = (userChoice) => {
  const computerChoice = getComputerChoice();
  const userWins =
    (userChoice === "Rock" && computerChoice === "Scissor") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissor" && computerChoice === "Paper");
  let result;
  if (userChoice === computerChoice) {
    result = "It's a Tie";
  } else if (userWins) {
    result = `You Won! ${userChoice} beats ${computerChoice}`;
    userScore += 1;
  } else {
    result = `You Lost! ${computerChoice} beats ${userChoice}`;
    computerScore += 1;
  }
  addResult(result);
};

function addResult(result){
  const resultHeading = document.createElement('h3');
  resultHeading.textContent = result;
  resultContainer.appendChild(resultHeading);
  const finalResult = document.createElement('h2');
  if(userScore == 5){
    finalResult.textContent = 'You Won';
    resultContainer.append(finalResult);
    userScore = 0;
    computerScore = 0;
  }
  else if(computerScore == 5){
    finalResult.textContent = 'You Lost';
    resultContainer.appendChild(finalResult);
    userScore = 0;
    computerScore = 0;
  }
}

rockBtn.addEventListener('click',() => {
  playRound("Rock");
})


paperBtn.addEventListener('click',() => {
  playRound("Paper");
})

scissorBtn.addEventListener('click',() => {
  playRound("Scissor");
})
