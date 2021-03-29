var answerOne = document.getElementById ("answerOne");
var answerTwo = document.getElementById ("answerTwo");
var answerThree = document.getElementById ("answerThree");
var answerFour = document.getElementById ("answerFour");
var timer = document.getElementById ("timer");
var highscore = document.getElementById("highscore");
var testQuestion = document.getElementById("question");
var startGame = document.getElementById("startGame");
var questionResponse = document.getElementById("questionAnswers");
var timeLeft = 30
// To do :
// create questions and lable the correct answer
// write code that replaces buttons with answers
// write code that cyles through the question
// write code that checks if answer is correct and adds time or subtracts time 
// save info 
// when user clicks 'highscore' a window prompt should show up displaying score. 

// all questions stored as objects inside variable 
var questionSelect = [{
    query: "what is a function ?",
    response: ["A reusable set of instructions", "Elements of html", "An array of variables", "cheese" ],
    answer: "A reusable set of instructions"
 },
 {
    query:  "what is html ?",
    response: ["carrot", "the base of a website","the base of chrome OS", "a videogame" ],
    answer: "the base of a website"
}
]
var questionNumber = 0
var quiz = questionSelect[questionNumber]


function gameStart (){
    mainGame();
    countdown();

}

function mainGame() {
 if(quiz) {
   testQuestion.textContent = quiz.query
   answerOne.textContent = quiz.response[0]
   answerTwo.textContent = quiz.response[1]
   answerThree.textContent = quiz.response[2]
   answerFour.textContent = quiz.response[3]
 }
  
}
// checks answer and moves to next question 
function correctAnswer () {

 if (questionResponse === quiz.answer ){

   questionNumber++;
   timer+5
 } else {
   alert = "you lost"
 }

}
// stops time and saves initals and score
function gameFinish () {
  countdown(clearInterval);
 

}

function countdown() { 
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft + " seconds left until game over.";
    if (timeLeft === 0){
      clearInterval(timeInterval);
      timer.textContent = " ";
      displayMessage();

    }

    

  }, 2000);
}
function displayMessage(){
  if (timer === 0){
      prompt = "you ran out of time";
      return;
  }
}
 function checkscore(){

 }


startGame = addEventListener("click", gameStart)
highscore = addEventListener("click", checkscore)