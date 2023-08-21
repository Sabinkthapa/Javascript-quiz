const questions = [
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Boolean", correct: false },
            { text: "Float", correct: true }
        ]
    },
    {
        question: "What does the 'DOM' stand for?",
        options: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Management", correct: false },
            { text: "Dynamic Output Manipulation", correct: false },
            { text: "Digital Object Model", correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            { text: "var", correct: true },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "variable", correct: false }
        ]
    },
    {
        question: "What is the purpose of 'localStorage' in JavaScript?",
        options: [
            { text: "Storing large amounts of data on the server", correct: false },
            { text: "Managing authentication and security", correct: false },
            { text: "Storing small amounts of data on the client side", correct: true },
            { text: "Optimizing code execution speed", correct: false }
        ]
    },
    {
        question: "What does the '=== operator' do in JavaScript?",
        options: [
            { text: "Performs addition", correct: false },
            { text: "Compares values and types for equality", correct: true },
            { text: "Assigns a value to a variable", correct: false },
            { text: "Checks if a value is greater than or equal to another value", correct: false }
        ]
    },
    {
        question: "What is the result of the following code?\n\nconsole.log(1 + '1' - 1);",
        options: [
            { text: "10", correct: false },
            { text: "01", correct: false },
            { text: "11", correct: true },
            { text: "NaN", correct: false }
        ]
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
            { text: "The current function", correct: false },
            { text: "The parent object", correct: true },
            { text: "The global window object", correct: false },
            { text: "The event target", correct: false }
        ]
    },
    {
        question: "What is the output of the following code?\n\nconsole.log(typeof typeof 42);",
        options: [
            { text: "string", correct: true },
            { text: "number", correct: false },
            { text: "undefined", correct: false },
            { text: "object", correct: false }
        ]
    },
    {
        question: "What does the 'map' method do in JavaScript?",
        options: [
            { text: "Creates a new array with the results of calling a function on every element", correct: true },
            { text: "Removes elements from an array", correct: false },
            { text: "Combines multiple arrays into one", correct: false },
            { text: "Sorts the elements of an array", correct: false }
        ]
    },
    {
        question: "What is the purpose of a closure in JavaScript?",
        options: [
            { text: "To encapsulate data and behavior", correct: true },
            { text: "To prevent code execution", correct: false },
            { text: "To synchronize asynchronous operations", correct: false },
            { text: "To validate user input", correct: false }
        ]
    },
];

var startGameElement = document.getElementById("startbtn");
// console.log(startGameElement);
var quizContainerELe = document.getElementById("quiz-container");
// console.log(quizContainerELe);
var questionTextEle = document.getElementById("questionText");
// console.log(questionTextEle);
var optionTextEle = document.getElementById("optionsText");
// console.log(questionTextEle);
var timerElement = document.getElementById("timer");
// console.log(timerElement);
var resultDisplayEle = document.getElementById("resultDisplay");
// console.log(resultDisplayEle);
var RestartGame = document.getElementById("restartbtn");
// console.log(RestartGame);


var currentQuestion = 0;
var score = 0;
var timerleft = 60;
var timer;

startGameElement.addEventListener ('click' , quizStart);

function quizStart (){
    // console.log("clicked");
    startGameElement.disabled = true;
    startTimer();
    showQuestion(currentQuestion);
}

function startTimer(){
         timer = setInterval(function(){
        timerElement.textContent = "Time left: " + timerleft +"s";
        timerleft--;
        if(timerleft < 0){
            clearInterval(timer);
            timerElement.textContent = "Time's up! Click restart to play again.";
        }
        },1000);
}

function showQuestion(currentQuestion){
    var question = questions[currentQuestion];
    // console.log("Question: " + question);
    questionTextEle.textContent = question.question;
    // console.log(questionTextEle.textContent);
    // clear option buttons container before adding new buttons
    optionTextEle.innerHTML = '';

    question.options.forEach(function(option, index){
        var optionButton = document.createElement('button');
        optionButton.textContent = option.text;
        optionButton.classList.add('option-button');
        optionButton.addEventListener('click',function(event){
            event.preventDefault();
            handleAnswerClick(option.correct);
        });
        optionTextEle.appendChild(optionButton);
    });         
}

// check for answer

function handleAnswerClick(isCorrect){ 
if(isCorrect){
    score++;
    resultDisplayEle.textContent = "Correct answer!";
} else {
    resultDisplayEle.textContent ="Wrong answer!";
    timerleft-=5;
    if (timerleft < 0) {
        timerleft = 0;
    }
}

currentQuestion++;
if (currentQuestion <questions.length && timer > 0){
    showQuestion(currentQuestion);
} else {
    optionTextEle.style.display = "none";
    resultDisplayEle.textContent = "coding quiz over! Your total score is ;" + score;
    RestartGame.style.display = "block";
}};










// store object questions in the array

// use method getelementById to select the element from DOM.

// initalias the value for like questions ,score

// declare function to start the quiz
// execute the function for timer, questions from the store object questions

// add button in the store object questions
// check for correct answer -if condition.

// use local storage to store the date, use prevent display to retrict reload 