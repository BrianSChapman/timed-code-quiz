// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
var body = document.body;
var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("timer-text");
var quizBox = document.getElementById("question-container");
var questionTitle = document.getElementById("question-title");
// var questionUl = document.getElementById("question-UL");
var questionOptions = document.getElementById("question-list");
var questionSpot = document.createElement("ol");
var answerA = document.createElement("li");
var answerB = document.createElement("li");
var answerC = document.createElement("li");
var answerD = document.createElement("li");


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
"Put the cheese on it.",
"Throw ingredients in a pan or panini press.",
"Check an email.",
"Grease the pan or panini press.",
"Peek at Black Friday deals.",
"Send a 'per my last email' response to your lazy coworker.",
"Throw it in the garbage."
] 

answerA.innerHTML = answers[0];
answerB.innerHTML = answers[1];
answerC.innerHTML = answers[2];
answerD.innerHTML = answers[3];

var time = 60; 

startButton.addEventListener("click", function(){
    
    questionTitle.innerHTML = questions[0];
    startButton.innerHTML = "";
    questionOptions.innerHTML = "";

    questionOptions.appendChild(questionSpot);
    questionSpot.appendChild(answerA);
    questionSpot.appendChild(answerB);
    questionSpot.appendChild(answerC);
    questionSpot.appendChild(answerD);

    answerA.setAttribute("style", "text-align:center; font-size: 15px; background-color: aquamarine; padding:5px; margin-left: 300px; margin-right:300px; margin-bottom: 5px; border-style:solid; border-color: black; border-radius:5px; cursor:pointer;");
    answerB.setAttribute("style", "text-align:center; font-size: 15px; background-color: aquamarine; padding:5px; margin-left: 300px; margin-right:300px; margin-bottom: 5px; border-style:solid; border-color: black; border-radius:5px; cursor:pointer;");
    answerC.setAttribute("style", "text-align:center; font-size: 15px; background-color: aquamarine; padding:5px; margin-left: 300px; margin-right:300px; margin-bottom: 5px; border-style:solid; border-color: black; border-radius:5px; cursor:pointer;" );
    answerD.setAttribute("style", "text-align:center; font-size: 15px; background-color: aquamarine; padding:5px; margin-left: 300px; margin-right:300px; margin-bottom: 5px; border-style:solid; border-color: black; border-radius:5px; cursor:pointer;");

    
    var timeAttack = setInterval(function() {
    time--;
    timerEl.innerHTML = "Time:" + time;
    
    if(time === 0) {
    clearInterval(timeAttack);
    highScoreMessage();
      
} }, 1000);

});

questionSpot.addEventListener("click", function(event){
    
    if(event.target === answerB) {

        alert("Nice! You got one.");
        questionTitle.innerHTML = questions[2];
        answerA.innerHTML = answers[0];
        answerB.innerHTML = answers[2];
        answerC.innerHTML = answers[4];
        answerD.innerHTML = answers[5];
        
        } else {
        alert("Yikes! Wrong answer, friend!");
        time - 3000;
        questionTitle.innerHTML = questions[2];
        answerA.innerHTML = answers[0];
        answerB.innerHTML = answers[2];
        answerC.innerHTML = answers[4];
        answerD.innerHTML = answers[5];
    }
})