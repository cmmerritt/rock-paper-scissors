export function didUserWin(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'win';
        } else if (computerChoice === 'paper') {
            return 'lose';
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'win';
        } else if (computerChoice === 'scissors') {
            return 'lose';
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'win';
        } else if (computerChoice === 'rock') {
            return 'lose';
        }
    }
}