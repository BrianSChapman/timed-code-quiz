// Establishing all starting variables so they're all in an accessible place
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

// The quiz questions, in an array for easy access
var questions = [
    "It's grilled cheese time! What's the first step in making one?",
    "Nice! We got the bread. What's next?",
    "Cheesin' it up! What do we do next?",
    "Pan or press is prepped! What's the next step?",
    "Now we're grilling! What's the final step?"
];
// Each set of answers was assigned it's own variable for easy callback
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

var answersQ4 = [
    "Eat it!",
    "Get out some bread",
    "Throw ingredients on a panini press",
    "Toss it in the garbage",
]

var answersQ5 = [
    "Eat it!",
    "Get out some bread",
    "Throw ingredients on a panini press",
    "Toss it in the garbage",
]

// The 1st round of answers were written directly into innerHTML
answerA.innerHTML = answersQ1[0];
answerB.innerHTML = answersQ1[1];
answerC.innerHTML =  answersQ1[2];
answerD.innerHTML = answersQ1[3];

var time = 60;

// The start of the quiz
startButton.addEventListener("click", function(){
    // Start with the 1st position of my questions array
    questionTitle.innerHTML = questions[0];
    startButton.innerHTML = "";
    startButton.disabled = true;
    questionOptions.innerHTML = "";
    // Creating and appending a Ul and Li's dynamically
    questionOptions.appendChild(questionSpot);
    questionSpot.appendChild(answerA);
    questionSpot.appendChild(answerB);
    questionSpot.appendChild(answerC);
    questionSpot.appendChild(answerD);
    // styling the quiz answers
    answerA.setAttribute("style", "text-align:center; font-size: 15px; background-color: aquamarine; padding:5px; margin-left: 300px; margin-right:300px; margin-bottom: 5px; border-style:solid; border-color: black; border-radius:5px; cursor:pointer;");
    answerB.setAttribute("style", "text-align:center; font-size: 15px; background-color: aquamarine; padding:5px; margin-left: 300px; margin-right:300px; margin-bottom: 5px; border-style:solid; border-color: black; border-radius:5px; cursor:pointer;");
    answerC.setAttribute("style", "text-align:center; font-size: 15px; background-color: aquamarine; padding:5px; margin-left: 300px; margin-right:300px; margin-bottom: 5px; border-style:solid; border-color: black; border-radius:5px; cursor:pointer;" );
    answerD.setAttribute("style", "text-align:center; font-size: 15px; background-color: aquamarine; padding:5px; margin-left: 300px; margin-right:300px; margin-bottom: 5px; border-style:solid; border-color: black; border-radius:5px; cursor:pointer;");

    // setting the timer to being when the Start button is pressed and count down from 60 seconds
    var timeAttack = setInterval(function() {
    time--;
    timerEl.textContent = "Time:" + time;
    
    if(time === 0) {
    clearInterval(timeAttack);
    highScoreMessage();
      
} }, 1000);

});
// Attempted calling questions forward with EventListener clicks but having issues
questionSpot.addEventListener("click", function(event){
    
    if(event.target === answerB) {

        questionTitle.innerHTML = questions[1];
        answerA.innerHTML = answersQ2[0];
        answerB.innerHTML= answersQ2[1];
        answerC.innerHTML = answersQ2[2];
        answerD.innerHTML= answersQ2[3];
        
        } else {
       
        // timerEl.textContent = "Time:" + time - 2000;
        questionTitle.innerHTML = questions[1];
        answerA.innerHTML = answersQ2[0];
        answerB.innerHTML = answersQ2[1];
        answerC.innerHTML = answersQ2[2];
        answerD.innerHTML = answersQ2[3];
    }
})       


questionSpot.addEventListener("click", function(event){
    

        if(event.target === answerC) {
        
        questionTitle.innerHTML = questions[2];
        answerA.innerHTML = answersQ3[0];
        answerB.innerHTML = answersQ3[1];
        answerC.innerHTML= answersQ3[2];
        answerD.innerHTML = answersQ3[3];
        
    }   else {
      
        // timerEl.textContent= "Time:" + time - 2000;
        questionTitle.innerHTML = questions[2];
        answerA.innerHTML = answersQ3[0];
        answerB.innerHTML = answersQ3[1];
        answerC.innerHTML = answersQ3[2];
        answerD.innerHTML = answersQ3[3];
    } 
})

questionSpot.addEventListener("click", function(event){

       
    
        if(event.target === answerC) {
       
        questionTitle.textContent = questions[3];
        answerA.innerHTML = answersQ4[0];
        answerB.innerHTML = answersQ4[1];
        answerC.innerHTML = answersQ4[2];
        answerD.innerHTML = answersQ4[3];
        
    }   else {
        
        // timerEl.textContent = "Time:" + time - 2000;
        questionTitle.innerHTML = questions[3];
        answerA.innerHTML = answersQ4[0];
        answerB.innerHTML = answersQ4[1];
        answerC.innerHTML = answersQ4[2];
        answerD.tinnerHTML = answersQ4[3];
} 

}) 

questionSpot.addEventListener("click", function(event){
        
   
         if(event.target === answerA) {

        questionTitle.textContent = questions[4];
        answerA.textContent = answersQ5[0];
        answerB.textContent = answersQ5[1];
        answerC.textContent = answersQ5[2];
        answerD.textContent = answersQ5[3];
        
    }   else {
       
        // timerEl.textContent = "Time:" + time - 2000;
        questionTitle.textContent = questions[4];
        answerA.textContent= answersQ5[0];
        answerB.textContent = answersQ5[1];
        answerC.textContent = answersQ5[2];
        answerD.textContent = answersQ5[3];
        } 
})   
//  Troubleshooting the quizk questions and didn't get to the high school input yet
function highScoreMessage() {
    
    playerInput.setAttribute("style", "display: block;  ")
    
   
}