// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../did-user-win.js';

const test = QUnit.test;

test('test didUserWin function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const rockRockExpected = 'draw';
    const paperPaperExpected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualRockRock = didUserWin('rock', 'rock');
    const actualPaperPaper = didUserWin('paper', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(rockRockExpected, actualRockRock, 'draw: player chose rock and computer chose rock');
    expect.equal(paperPaperExpected, actualPaperPaper, 'draw: player chose paper and computer chose paper');
});
