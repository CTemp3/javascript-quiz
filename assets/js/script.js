// initial variable declaration
var startButton = document.getElementById('start-btn');
var questionSectionEl = document.getElementById('question-section');

var questionEl = ['Which of the following is considered a string?', 'What will console.log(quizAnswerEl) do?'];

console.log(questionEl);

// quiz start function
var startQuiz = function() {
    startButton.classList.add('hide');
    questionSectionEl.classList.remove('hide');
    
}

// question change function
var changeQuestion = function() {

}

// right or wrong answer statement
var rightOrWrong = function() {
    /* if () {

     } else {

     } */
}

// timer function
var timer = function() {

}

startButton.addEventListener("click", startQuiz)