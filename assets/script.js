
var question1 = {
    question: "Which of the following is used to select a class in CSS?",
    choices: [".", "$", "#", "<>"],
    answer: "."
}

var question2 = {
    question: "Which of the folowing is used to select an id in CSS?",
    choices: [".", "$", "#", "<>"],
    answer: "#"
}

var question3 = {
    question: "Primitive Data Types include:",
    choices: ["String", "Number", "Boolean", "All of the above"],
    answer: "All of the above"
}

var question4 = {
    question: "Which operator returns the remainder between two numbers?",
    choices: ["&", "%", "~", "/"],
    answer: "%"
}

var question5 = {
    question: "What can be stored in objects?",
    choices: ["Primitive data", "Arrays", "Methods", "All of the above"],
    answer: "All of the above"
}

var question6 = {
    question: "Which is not part of the CSS box model?",
    choices: ["Margin", "Border", "Padding", "Window"],
    answer: "Window"
}

var question7 = {
    question: "Which of the following is not an array method?",
    choices: ["valueOf()", "pop()", "push()", "concat()"],
    answer: "valueOf()"
}

var timer = document.getElementById('time')
var timeLeft = 60;

function countdown() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft

        if(timeLeft === 0){
            clearInterval(timeInterval);
        }

    }, 1000);
}

countdown();