// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// Questions and answers to be used in the quiz
var questions = [
    {
        question: "Which is not a valid Javascript data type?",
        option1: "A string",
        option2: "An array",
        option3: "A boolean",
        option4: "A function",
        answer: "A function"
    },
    {
        question: "Console.log() is considered a _______?"
        option1: "Method",
        option2: "Function",
        option3: "Object",
        option4: "String",
        answer: "Method"
    },
    {
        question: "What is the name of the process for joining two strings?"
        option1: "String join",
        option2: "Stringify",
        option3: "Concatenation",
        option4: "Escape",
        answer: "Concatenation"
    },
    {
        question: "How do we declare variables in Javascript?",
        option1: "var",
        option2: "const",
        option3: "let",
        option4: "All of the above",
        answer: "All of the above"
    },
    {
        question: "Which of the follow code options generates a window for user input?",
        option1: "window('hello');",
        option2: "console.log('Hello')",
        option3: "localStorage.setItem('Hello');",
        option4: "prompt('Hello?');",
        answer: "prompt('Hello');"
    },
    {
        question: "A function without a name is called an anonymous function.",
        option1: "True",
        option2: "False",
        answer: "True"
    },
    {
        question: "What do you call a function passed into another function as an argument?",
        option1: "Recycled Function",
        option2: "Hollaback Girl",
        option3: "Callback Function",
        option4: "Recursive Function",
        answer: "Callback Function"
    },
    {
        question: "Which of the following is not a type of loop in Javascript?",
        option1: "For",
        option2: "While",
        option3: "Do...While",
        option4: "Do Wah Diddy Baby Dum Diddy Do",
        answer: "Do Wah Diddy Baby Dum Diddy Do"
    },
    {
        question: "A return statement is unable to return a value. It can only end function execution.",
        option1: "True",
        option2: "False",
        answer: "False"
    },
    {
        question: "Math.random() by itself can generate the number 1.",
        option1: "True",
        option2: "False",
        answer: "False"
    },
];

// Function to store questions in localStorage
function storeQuestions() {
    localStorage.("questions", JSON.stringify(questions));
}