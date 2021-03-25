## Making a plan
1) HTML & CSS
-text - explain rules - list?
-create radio buttons & group for rock, paper, scissors
-play button
-display wins, losses, and total games played
-display result of each game: indicate what the computer threw and what the result was (win, loss, draw, total)

2) JS
-FUNCTIONS
    -getRandomThrow (impure) - in its own module 
        -generate random # and transform into rock, paper, or scissors
        -return STRING
    -didUserWin (pure so TDD)
        -two parameters: player, computer
        -returns one of:
            win (player beats computer)
            loss (computer beats player)
            draw (throws identical)
        -nine possible outcomes; test each one at a time
            -3 x 3: player(rock v paper v scissors), computer(rock v paper v scissors)
-APP
    -import functions
    -get needed DOM elements with querySelector
        -selected radio button (rock/paper/scissors)
        -play button
        -elements to display:
            -win, loss, or draw
            -total wins, losses, draws, games in current round
    -set initial state (let)
        -initial wins, losses, draws, total games in current round
    -use event handler to get checked radio button when "play" is clicked
            document.querySelector('input:checked')

-What should happen when user clicks the play button?
    -event listener
    -use querySelector to determine which radio button was selected
    -run getRandomThrow to generate computer's throw
    -run didUserWin to determine outcome of game
    -use outcome to increment wins/draws/losses 
        -total can be derived
    -display outcome of game to user
    -display updated wins/draws/losses to user
    -reset radio button??


STRETCH:
1) Add reset button
2) Display how many times reset button was clicked
3) TDD getRandomThrow function