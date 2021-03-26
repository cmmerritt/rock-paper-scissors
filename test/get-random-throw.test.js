// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

test('test getRandomThrow function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const rockExpected = 'rock';
    const paperExpected = 'paper';
    const scissorsExpected = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actualRock = getRandomThrow(0.1);
    const actualPaper = getRandomThrow(0.5);
    const actualScissors = getRandomThrow(0.8);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(rockExpected, actualRock, '0.1 should return rock');
    expect.equal(paperExpected, actualPaper, '0.5 should return paper');
    expect.equal(scissorsExpected, actualScissors, '0.8 should return scissors');
});
