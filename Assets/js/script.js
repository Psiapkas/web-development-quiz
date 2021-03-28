var answerOne = document.getElementById ("answerOne");
var answerTwo = document.getElementById ("answerTwo");
var answerThree = document.getElementById ("answerThree");
var answerFour = document.getElementById ("answerFour");
var timer = document.getElementById ("timer");
var highscore = document.getElementById("highscore");
var testQuestion = document.getElementById("question");
var startGame = document.getElementById("startGame")
var timeLeft = 30
// To do :
// create questions and lable the correct answer
// write code that cyles through the question
// write code that replaces buttons with answers
// write code that checks if answer is correct and adds time or subtracts time 
// save info 
// when user clicks 'highscore' a window prompt should show up displaying score. 
var question1 = {
    query: "what is a function ?",
    response: ["A reusable set of instructions", "Elements of html", "An array of variables", "cheese" ],
    answer: "A reusable set of instructions"
 }

var question2 = {
    query:  "what is html ?",
    response: ["carrot", "the base of a website","the base of chrome OS", "a videogame" ],
    answer: "the base of a website"
}
var currentQuestion = 0
var questionSelect = [question1, question2]
var 
function gameStart (){
    countdown();

}

function questionChange() {

  
}
function displayMessage(){
    if (timer === 0){
        prompt = "you ran out of time";
        return;
    }
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

    

  }, 1000);
}
 
startGame = addEventListener("click", gameStart)
