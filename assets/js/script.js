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

var Questions = [
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
];