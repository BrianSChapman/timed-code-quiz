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
var questionOptions = document.getElementById("question-list");
var questionSpot = document.createElement("ol");
var answerA = document.createElement("li");
var answerB = document.createElement("li");
var answerC = document.createElement("li");
var answerD = document.createElement("li");
var playerInput = document.getElementById("score-box");


var questions = [
    "It's grilled cheese time! What's the first step in making one?",
    "Nice! We got the bread. What's next?",
    "Cheesin' it up! What do we do next?",
    "Pan or press is prepped! What's the next step?",
    "Now we're grilling! What's the final step?"
];

var answersQ1 = [
    "Eat it!",
    "Get out some bread.",
    "Put the cheese on it.",
    "Check an email",
] 

var answersQ2 = [
    "Eat it!",
    "Get out some bread.",
    "Put the cheese on it.",
    "Check an email",
]

var answersQ3 = [
    "Eat it!",
    "send a 'per my last email' response to a lazy coworker",
    "Grease the pan or panini press.",
    "Put the cheese on it",
]

var answerQ4 = [
    "Eat it!",
    "Get out some bread",
    "Throw ingredients on a panini press",
    "Toss it in the garbage",
]

var answerQ5 = [
    "Eat it!",
    "Get out some bread",
    "Throw ingredients on a panini press",
    "Toss it in the garbage",
]


answerA.innerText = answersQ1[0];
answerB.innerText = answersQ1[1];
answerC.innerText =  answersQ1[2];
answerD.innerText = answersQ1[3];

var time = 60;

startButton.addEventListener("click", function(){
    
    questionTitle.innerHTML = questions[0];
    startButton.innerHTML = "";
    startButton.disabled = true;
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
    timerEl.textContent = "Time:" + time;
    
    if(time === 0) {
    clearInterval(timeAttack);
    highScoreMessage();
      
} }, 1000);

});

questionSpot.addEventListener("click", function(event){
    
    if(event.target === answerB) {

        questionTitle.innerHTML("Nice! We got the bread. What's next?");
        answerA.textContent = answersQ2[0];
        answerB.textContent = answersQ2[1];
        answerC.textContent = answersQ2[2];
        answerD.textContent = answersQ2[3];
        
        } else {
       
        // timerEl.textContent = "Time:" + time - 2000;
        questionTitle.textContent = questions[1];
        answerA.textContent = answersQ2[0];
        answerB.textContent = answersQ2[1];
        answerC.textContent = answersQ2[2];
        answerD.textContent= answersQ2[3];
    }
})       


questionSpot.addEventListener("click", function(event){
    

        if(event.target === answerC) {
        
        questionTitle.textContent("Cheesin' it up! What do we do next?");
        answerA.textContent = answersQ3[0];
        answerB.textContent = answersQ3[1];
        answerC.textContent= answersQ3[2];
        answerD.textContent = answersQ3[3];
        
    }   else {
      
        // timerEl.textContent= "Time:" + time - 2000;
        questionTitle.textContent = questions[2];
        answerA.textContent = answersQ3[0];
        answerB.textContent = answersQ3[1];
        answerC.textContent = answersQ3[2];
        answerD.textContent = answersQ3[3];
    } 
})

questionSpot.addEventListener("click", function(event){

       
    
        if(event.target === answerC) {
       
        questionTitle.textContent("Pan or press is prepped! What's the next step?");
        answerA.textContent= answersQ4[0];
        answerB.textContent = answersQ4[2];
        answerC.textContent = answersQ4[7];
        answerD.textContent = answersQ4[3];
        
    }   else {
        
        // timerEl.textContent = "Time:" + time - 2000;
        questionTitle.textContent = questions[3];
        answerA.textContent = answersQ4[0];
        answerB.textContent= answersQ4[3];
        answerC.textContent = answersQ4[7];
        answerD.textContent = answersQ4[2];
} 

}) 

questionSpot.addEventListener("click", function(event){
        
   
         if(event.target === answerA) {

        questionTitle.textContent("Now we're grilling! What's the final step?");
        answerA.textContent = answersQ5[0];
        answerB.textContent = answersQ5[3];
        answerC.textContent = answersQ5[7];
        answerD.textContent = answersQ5[2];
        
    }   else {
       
        // timerEl.textContent = "Time:" + time - 2000;
        questionTitle.textContent = questionsQ5[4];
        answerA.textContent= answersQ5[0];
        answerB.textContent = answersQ5[3];
        answerC.textContent = answersQ5[7];
        answerD.textContent = answersQ5[2];
        } 
})   

function highScoreMessage() {
    
    playerInput.setAttribute("style", "display: block; ")
    
   
}