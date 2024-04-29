# rock-paper-scissors2
Rock paper scissors second runthrough

12/7/23: 2 hrs (JavaScipt only) - Built the foundation for the project per the project instructions. 
I formed a better understanding of creating elements with JavaScript and assigning to them attributes, variables, and functions. I exercised my knowledge of loops, arrays, and variable incrimentors and decrementers.

12/14/23: 4 hrs - After creating a new experimental branch (per the instructions from second part of the Rock, Paper, Scissors lesson of The Odin Project), I appended new HTML elements using JavaScript; redefined playerSelection and created new functions and variables to display player input and computer's randomized selection in the console as well as on the document. I formed a better understanding of setting and applying id's using JavaScript. 

12/18/23: after moving getPlayerSelection into playRound(), playerSelection shows as valid in the if/else statement, but console only returns/log computer's choice. :p 30 min

12/19/23: After 2 hours of debugging, deleting, copy + pasting, and refactoring, most of the bugs have been worked out; both the player and computer once again get a turn each for each round, the scores are displayed on the screen, the event listeners all do what they should. However, I'm at a loss for why my win() and lose() aren't working now. I tried assigning id's to the playerSelection options, moving functions into/away from each other, making minor and larger more risky syntax tweaks. 
After another 2 hours of trial and error, I've finally gotten the console to accept & respond to function based on player + computer selections ... however, now it's gona from not running either win() or lose() function each round, to running both.
After 6 hours of debugging, I've realized that the fix was to write:

// if/else statement here...
if ((playerSelection) == 'rock' && computerSelection == 'scissors') {
    console.log("YOU WIN!");
}
INSTEAD OF THIS:
// if/else statement here...
if (playerSelection == 'rock' && computerSelection == 'scissors') {
    console.log("YOU WIN!");
}

How silly of me.
...At least I can say I learned something today!

In the 9th hour, I've finished the project (part 2) requirements.
The game runs 4 rounds before alerting Game Over and showing the final scores. I took a break from the JavaScript portion while I was feeling stumped, and I added just enough CSS to make the project no longer an eyesore (or invisible outside of the console). 

I plan on adding onto this project more in the near future. Just some fine details:
- different audio clips on click for each btn
- a hidden loading screen with a Start Game? btn
- a hidden Game Over screen with a Play Again? option
- more ... *pazazz* with the color scheme and over all animation

BUT, for now, I'm happy with the end result.
This project demanded about 16.5 fun-filled joyous hours.
It helped me form a much better grasp of loops and their syntax, reinforced my understanding of creating and manipulating HTML elements with JavaScript, and presented me multiple opportunities to strengthen my know-how on updating elements' innerHTML so that the text/element updates on the page in real time instead of stacking new text elements over and over (and over...) again.
I added a @keyframes animation to the buttons to give the project a little ~spice~ but overall kept the design pretty tame.
My biggest (and probably silliest) obstacle was not being able to target playerSelection during part 2 of the project for HOURS of trial and error, simply because i didn't put parentheses around it in the if/else statement. It was a great learning opportunity for me though, teaching me to pay better attention to how different objects store the data I'm trying to pull. 
This project left me feeling stumped a handful of times, but it was a great challenge! I had a lot of fun with this. :)


12/20/23
I managed to make the round counter reset after 4 so that the if/else statement doesn't only work 4 and then become irrelevant at 5, 6, 7, etc. 
Now the issue is that win() and lose() seem to sometimes fire after the round is complete. Meaning that even if the 4th round is over and the round counter resets to 0, either the player or computer can still sometimes display a win. I may have nested something weird or have a callback or something I keep looking past. 


Credits:

paper img source: https://th.bing.com/th/id/R.6949ee86b3ab0fee993f170a72fd2d04?rik=JL95HtGeovF7Ww&riu=http%3a%2f%2fpixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com%2fimage%2f7346e1cdfa07a65.png&ehk=jkWnpPx9791BIDLVRunZMPQJ6Y7x1UlTxv8S3qtQ06E%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1

rock img source: https://th.bing.com/th/id/R.9478ee9836ff0a78b241b99ba30aaa72?rik=khZ%2bvW%2fwuGQOBA&riu=http%3a%2f%2fpixelartmaker.com%2fart%2fda268f06e621b21.png&ehk=dEYs2jkBmKLTdT6nRtBB3Vs19%2bSIEMg0U8mGPHOSR7g%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1

scissors img source: https://www.pinclipart.com/picdir/middle/562-5621754_orange-scissors-png-image-download-scissors-transparent-background.png

4/28/24
I'm making minor CSS tweaks and troubleshooting some minor bugs now that I have had some time apart from this project.
To fix:
- score from 3rd round carries over on the scoreboard after a new game is started
- clicks from outside of the rock, paper, and scissors buttons are being counted as a turn 
- consider wrapping win/lose conditions in a if(rounds < 3) else... statement
- the game over alert runs before the 3rd round ends and registers on the scoreboard... why is that?