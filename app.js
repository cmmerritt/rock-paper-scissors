// import functions and grab DOM elements

import { getRandomThrow } from './get-random-throw.js';

import { didUserWin } from './did-user-win.js';

const playButton = document.getElementById('play-button');

const computerPickArea = document.getElementById('computer-pick');
const resultArea = document.getElementById('result');
const winsArea = document.getElementById('wins');
const lossesArea = document.getElementById('losses');
const drawsArea = document.getElementById('draws');
const totalArea = document.getElementById('total');


// initialize state

let wins = 0;
let losses = 0;
let draws = 0;

// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    const randomNum = Math.random() * 10;
    const computerPick = getRandomThrow(randomNum);
    const userSelectedRadioButton = document.querySelector('input:checked');
    const userPick = userSelectedRadioButton.value;

    computerPickArea.textContent = computerPick;

    const result = didUserWin(userPick, computerPick);
    

    if (result === 'win') {
        wins++;
        resultArea.textContent = 'You win!';
    } else if (result === 'lose') {
        losses++;
        resultArea.textContent = 'You lose';
    } else if (result === 'draw') {
        draws++;
        resultArea.textContent = 'It\'s a draw';
    }

    winsArea.textContent = wins;
    drawsArea.textContent = draws;
    lossesArea.textContent = losses;
    totalArea.textContent = wins + draws + losses;
});
