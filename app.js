// import functions and grab DOM elements

import { getRandomThrow } from './get-random-throw.js';

import { didUserWin } from './did-user-win.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');

const computerPickArea = document.getElementById('computer-pick');
const resultArea = document.getElementById('result');
const winsArea = document.getElementById('wins');
const lossesArea = document.getElementById('losses');
const drawsArea = document.getElementById('draws');
const totalArea = document.getElementById('total');


// initialize state

let wins, losses, draws, total = 0;

// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    const randomNum = Math.random() * 10;
    const computerPick = getRandomThrow(randomNum);
    const userSelectedRadioButton = document.querySelector('input:checked');
    const userPick = userSelectedRadioButton.value;

    computerPickArea.textContent = computerPick;
    
    total++;
    totalArea.textContent = `${total}`;

    const result = didUserWin(userPick, computerPick);
    resultArea.textContent = `${result}`;

    if (result === 'win') {
        wins++;
        winsArea.textContent = `${wins}`;
    } else if (result === 'lose') {
        losses++;
        winsArea.textContent = `${losses}`;
    } else if (result === 'draw') {
        draws++;
        drawsArea.textContent = `${draws}`;
    }

    //
});


