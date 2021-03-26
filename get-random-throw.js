// Generate random number
// Calc which range it falls into: rock, paper, scissors
// Return result as string

export function getRandomThrow(someNum) {
    if (someNum < (10 / 3)) {
        return 'rock';
    } else if (someNum < (10 / 3) * 2) {
        return 'paper';
    } else {
        return 'scissors';
    } 
}