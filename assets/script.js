// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("timer-text");
var quizBox = document.getElementById("question-container");
var questionTitle = document.getElementById("question-title");
var questionOptions = document.getElementById("question-list");

var time = 75; 

startButton.addEventListener("click", function(){
    
    quizBox.innerHTML = "";
    timerStart();
})

function timerStart() {

var timeAttack = setInterval(function() {
         time--;
        timerEl.innerHTML = "Time:" + time;

        if(time === 0) {
        clearInterval(timeAttack);
        highScoreMessage();
       } 
    }, 1000);
}

