let score;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    switch (randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        score++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        score++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        score++;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You Lose! Rock beats Scissors";
    } else {return "It's a tie!";
    }
}

function game() {
    score = 0
    let playerSelection = window.prompt("What do you choose: Rock, Paper or Scissors?")
    console.log(playRound(playerSelection, computerPlay()));
    playerSelection = window.prompt("What do you choose: Rock, Paper or Scissors?")
    console.log(playRound(playerSelection, computerPlay()));
    playerSelection = window.prompt("What do you choose: Rock, Paper or Scissors?")
    console.log(playRound(playerSelection, computerPlay()));
    playerSelection = window.prompt("What do you choose: Rock, Paper or Scissors?")
    console.log(playRound(playerSelection, computerPlay()));
    playerSelection = window.prompt("What do you choose: Rock, Paper or Scissors?")
    console.log(playRound(playerSelection, computerPlay()));
    console.log("You got a score of " + score + " out of 5!");
    if (score >= 3) {
        console.log('You win!');
    } else {
        console.log('You lose!');
    }
}