const choices = ["Rock", "Paper", "Scissor"];
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
  return computerChoice;
};

const playRound = (computerChoice, userChoice) => {
  const userWins =
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper");
  let result;
  if (userChoice === computerChoice) {
    result = "It's a Tie";
  } else if (userWins) {
    result = `You Won! ${userChoice} beats ${computerChoice}`;
  } else {
    result = `You Lost! ${computerChoice} beats ${userChoice}`;
  }
  return result;
};


const game = () => {
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice().toLowerCase();
    const userChoice = prompt(
      "Enter Your Choice(Rock,Paper,Scissor): "
    ).toLocaleLowerCase();
    const roundResult = playRound(computerChoice, userChoice);
    console.log(roundResult);
  }
};

game();