// Generate random number
// Calc which range it falls into: rock, paper, scissors
// Return result as string

export function getRandomThrow(someNum) {
    if (someNum < (1 / 3)) {
        return 'rock';
    } else if (someNum < ((1 / 3) * 2) && someNum > (1 / 3)) {
        return 'paper';
    } else {
        return 'scissors';
    } 
}