var questions = [
    {
        question: "Which of the following is used to select a class in CSS?",
        choices: [".", "$", "#", "<>"],
        answer: "."
    },
    {
        question: "Which of the folowing is used to select an id in CSS?",
        choices: [".", "$", "#", "<>"],
        answer: "#"
    },
    {
        question: "Primitive Data Types include:",
        choices: ["String", "Number", "Boolean", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which operator returns the remainder between two numbers?",
        choices: ["&", "%", "~", "/"],
        answer: "%"
    },
    {
        question: "What can be stored in objects?",
        choices: ["Primitive data", "Arrays", "Methods", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which is not part of the CSS box model?",
        choices: ["Margin", "Border", "Padding", "Window"],
        answer: "Window"
    },
    {
        question: "Which of the following is not an array method?",
        choices: ["valueOf()", "pop()", "push()", "concat()"],
        answer: "valueOf()"
    }];

var startButtonEl = document.querySelector('#startButton');
var timerEl = document.querySelector('#timer');
var timeLeft = 60;
var quizQuestionEl = document.querySelector('.quizQuestion');
var questionTextEl = document.querySelector('.questionText');
var choiceAEl = document.querySelector('#choiceA');
var choiceBEl = document.querySelector('#choiceB');
var choiceCEl = document.querySelector('#choiceC');
var choiceDEl = document.querySelector('#choiceD');



function startTimer () {
    var timeInterval = setInterval(function () {
        timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timeInterval);
    }
    },1000)
}

startButtonEl.addEventListener("click", function () { 
    // timeLeft--;
    console.log("start quiz button clicked")
    startTimer();
});
