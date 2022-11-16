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
var questionUl = document.getElementById("question-UL");
var questionOptions = document.getElementById("question-list");
var time = 60; 

var questions = [
"It's grilled cheese time! What's the first step in making one?",
"Nice! We got the bread. What's next?",
"Cheesin' it up! What do we do next?",
"Pan or press if prepped! What's the next step?",
"Now we're grilling! What's the final step?"
];

var answers = [
"Eat it!",
"Get out some bread.",
"Put the cheese on it",
"Throw ingredients in a pan or panini press",
"Check an email",
"Grease the pan or panini press",
"Peek at Black Friday deals",
"Send a 'per my last email' response to your lazy coworker",
"Throw it in the garbage"
] 


startButton.addEventListener("click", function(){
    
    questionTitle.innerHTML = "It's grilled cheese time! What's the first step in making one?";
    var newUl = document.createElement("ul");
    // var newLi = document.

    var timeAttack = setInterval(function() {
    time--;
    timerEl.innerHTML = "Time:" + time;


    if(time === 0) {
    clearInterval(timeAttack);
    highScoreMessage();
      
} }, 1000);

})







