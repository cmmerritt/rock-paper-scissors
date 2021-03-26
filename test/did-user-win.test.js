// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../did-user-win.js';

const test = QUnit.test;

test('test didUserWin function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const rockRockExpected = 'draw';
    const paperPaperExpected = 'draw';
    const scissorsScissorsExpected = 'draw';
    const rockScissorsExpected = 'win';
    const rockPaperExpected = 'lose';
    const paperRockExpected = 'win';
    const paperScissorsExpected = 'lose';
    const scissorsPaperExpected = 'win';
    const scissorsRockExpected = 'lose';

    //Act 
    // Call the function you're testing and set the result to a const
    const actualRockRock = didUserWin('rock', 'rock');
    const actualPaperPaper = didUserWin('paper', 'paper');
    const actualScissorsScissors = didUserWin('scissors', 'scissors');
    const actualRockScissors = didUserWin('rock', 'scissors');
    const actualRockPaper = didUserWin('rock', 'paper');
    const actualPaperRock = didUserWin('paper', 'rock');
    const actualPaperScissors = didUserWin('paper', 'scissors');
    const actualScissorsPaper = didUserWin('scissors', 'paper');
    const actualScissorsRock = didUserWin('scissors', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(rockRockExpected, actualRockRock, 'draw: player chose rock and computer chose rock');
    expect.equal(paperPaperExpected, actualPaperPaper, 'draw: player chose paper and computer chose paper');
    expect.equal(scissorsScissorsExpected, actualScissorsScissors, 'draw: player chose scissors and computer chose scissors');
    expect.equal(rockScissorsExpected, actualRockScissors, 'win: player chose rock and computer chose scissors');
    expect.equal(rockPaperExpected, actualRockPaper, 'lose: player chose rock and computer chose paper');
    expect.equal(paperRockExpected, actualPaperRock, 'win: player chose paper and computer chose rock');
    expect.equal(paperScissorsExpected, actualPaperScissors, 'lose: player chose paper and computer chose scissors');
    expect.equal(scissorsPaperExpected, actualScissorsPaper, 'win: player chose scissors and computer chose paper');
    expect.equal(scissorsRockExpected, actualScissorsRock, 'lose: player chose scissors and computer chose rock');
});
