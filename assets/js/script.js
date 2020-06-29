// Quiz Questions
var quiz = [
    {
        question: "Which is not a valid Javascript data type?",
        answers: [
            "A string",
            "An array",
            "A boolean",
            "A function"
        ],
        correctAnswer: "A function"
    },    
    {
        question: "Console.log() is considered a _______?",
        answers: [
            "Method",
            "Function",
            "Object",
            "String"
        ],
        correctAnswer: "Method"
    },
    {
        question: "What is the name of the process for joining two strings?",
        answers: [
            "String join",
            "Stringify",
            "Concatenation",
            "Escape"
        ],
        correctAnswer: "Concatenation"
    },
    {
        question: "How do we declare variables in Javascript?",
        answers: [
            "var",
            "const",
            "let",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "Which of the follow code options generates a window for user input?",
        answers: [
            "window('hello');",
            "console.log('Hello')",
            "localStorage.setItem('Hello');",
            "prompt('Hello?');"
        ],
        correctAnswer: "prompt('Hello');"
    },
    {
        question: "What do you call a function passed into another function as an argument?",
        answers: [
            "Recycled Function",
            "Hollaback Girl",
            "Callback Function",
            "Recursive Function",
        ],
        correctAnswer: "Callback Function"
    },
    {
        question: "Which of the following is not a type of loop in Javascript?",
        answers: [
            "For",
            "While",
            "Do...While",
            "Do Wah Diddy Baby Dum Diddy Do"
        ],
        correctAnswer: "Do Wah Diddy Baby Dum Diddy Do"
    },
];

// Global Variables
var pageContentEl = document.querySelector("#page-content");
var index = 0;

// Header Variables
var timerEl = document.querySelector("#timer");
var viewScoresEl = document.querySelector("#view-scores");

// Introduction Page Variables
var introductionEl = document.querySelector(".introduction");
var startButtonEl = document.querySelector("#start-btn");

// Generate Questions
function generateQuestion() {
    // Remove introduction section from page
    introductionEl.remove();
    // Display quiz questions section
    sectionContainerEl.classList.remove("quiz-display");
    // If the index is less than the length of the quiz
    if (index < quiz.length) {
        // Fill question container with quesiton at index
        questionContainerEl.textContent = quiz[index].question;
        // Store answers at index
        var answers = quiz[index].answers;

        // For each answer stored
        answers.forEach(function(element) {
        // Create a button
        var optionButton = document.createElement("button");
        // Set innerHTML to text of answer choice
        optionButton.innerHTML = element;
        optionButton.className = "quiz-btn";
        // After clicking button run verification
        optionButton.addEventListener("click", () => {verifyAnswer(element)})
        questionContainerEl.appendChild(optionButton);
        })
    }
}

startButtonEl.addEventListener("click", generateQuestion);