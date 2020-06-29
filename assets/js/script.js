// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question -- Done
// WHEN I answer a question
// THEN I am presented with another question -- Done
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock -- Done
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over -- Done
// WHEN the game is over
// THEN I can save my initials and score
// Questions and answers to be used in the quiz
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
var viewScoresEl = document.querySelector("#view-scores");
var scoreSectionEl = document.querySelector(".high-score-display");

var pageContentEl = document.querySelector("#page-content");
var introductionEl = document.querySelector(".introduction");
var timerEl = document.querySelector("#timer");
var buttonEl = document.querySelector("#start-btn");

var sectionContainerEl = document.querySelector(".quiz-display");
var quizContainerEl = document.querySelector("#quiz-container");
var questionContainerEl = document.querySelector("#question-title");
var toggleCorrectEl = document.querySelector("#correct-notify");
var toggleWrongEl = document.querySelector("#wrong-notify");

var scoreContainerEl = document.querySelector(".score-display");
var scoreDisplayEl = document.querySelector("#score-count");
var quizLengthEl = document.querySelector("#quizLength");
var restartButtonEl = document.querySelector("#restart-btn");
var saveScoreEl = document.querySelector("#submit-score");
var userInitialsEl = document.querySelector("#userInitials");

var scoreArr = JSON.parse(localStorage.getItem("high-score"));
var scoreCount = 0;
var index = 0;
var timeLeft = 90;


function countDown() {
    setInterval(function() {
        if (timeLeft < 0) {
            clearInterval(timeLeft = 0);
            timerEl.innerHTML = timeLeft;
            return generateScore();
        } else if (index === quiz.length) {
            clearInterval(timeLeft = 0);
            timerEl.innerHTML = timeLeft;
            return generateScore();
        } 
        timerEl.innerHTML = timeLeft;
        timeLeft -=1;
    }, 1000)
}

function generateQuestion () {
    if (timeLeft === 90) {
        countDown();
    }

    introductionEl.remove();
    sectionContainerEl.classList.remove("quiz-display");

    if (index < quiz.length) {
        questionContainerEl.textContent = quiz[index].question;
        var answers = quiz[index].answers;

        answers.forEach(function(element) {
        var optionButton = document.createElement("button");
        optionButton.innerHTML = element;
        optionButton.className = "quiz-btn";
        optionButton.addEventListener("click", () => {verifyAnswer(element)})
        questionContainerEl.appendChild(optionButton);
        })
    }
}

function verifyAnswer(clickedAnswer) {
    toggleCorrectEl.classList.add("correct-notify");
    toggleWrongEl.classList.add("wrong-notify");
    if (clickedAnswer === quiz[index].correctAnswer) {
        scoreCount++;
        index++;
        toggleCorrectEl.classList.remove("correct-notify");
    } else {
        index++;
        timeLeft -= 5;
        toggleWrongEl.classList.remove("wrong-notify");
    }
    return generateQuestion();
}

function generateScore() {
    // Remove introduction
    sectionContainerEl.classList.add("quiz-display");
    // Inform user they're all done
    scoreContainerEl.classList.remove("score-display");
    // Show user score count
    scoreDisplayEl.textContent = scoreCount;
    quizLengthEl.textContent = (quiz.length);
}

function restartGame() {
    index = 0;
    scoreCount = 0;
    timeLeft = 90;
    toggleCorrectEl.classList.add("correct-notify");
    toggleWrongEl.classList.add("wrong-notify");
    scoreContainerEl.classList.add("score-display");
    return generateQuestion();
}

function saveScore() {
    var name = userInitialsEl.value;
    var scoreKeeper = {name: [], score: []};
    scoreKeeper.name.push(name);
    scoreKeeper.score.push(scoreCount);
    localStorage.setItem("high-score", JSON.stringify(scoreKeeper));
}

function displayScores() {
    scoreSectionEl.classList.remove("high-score-display");
    introductionEl.remove();
    sectionContainerEl.classList.add("quiz-display");
    scoreContainerEl.classList.add("score-display");

    var scoreSectionTitle = document.createElement("h1");
    scoreSectionTitle.innerHTML = "Here are the high scores!";
    scoreSectionTitle.className = "title";
    scoreSectionTitle.setAttribute("style", "margin: 0 auto;");
    scoreSectionEl.appendChild(scoreSectionTitle);

    var scoreTitleDiv = document.createElement("div");
    scoreTitleDiv.setAttribute('style', 'display: flex; justify-content: space-around;');
    scoreSectionEl.appendChild(scoreTitleDiv);
    var nameDisplayTitle = document.createElement("h2");
    nameDisplayTitle.className = "display-title";
    nameDisplayTitle.innerHTML = "Name";
    scoreTitleDiv.appendChild(nameDisplayTitle);
    var scoreDisplayTitle = document.createElement("h2");
    scoreDisplayTitle.className = "display-title";
    scoreDisplayTitle.innerHTML = "Score";
    scoreTitleDiv.appendChild(scoreDisplayTitle);

    var scoreSectionDiv = document.createElement("div");
    scoreSectionDiv.className = "score-div";
    scoreSectionEl.appendChild(scoreSectionDiv);

    var dataDisplay = JSON.parse(localStorage.getItem("high-score"));
    var strName = [];
    strName.push(dataDisplay);
    console.log(strName);
    // dataDisplay.forEach(function(element){
    // var nameDisplay = document.createElement("h3");
    // nameDisplay.innerHTML = element[dataIndex].name;
    // var scoreDisplay = document.createElement("h3");
    // scoreDisplay.innerHTML = element[dataIndex].score;
    // scoreSectionDiv.appendChild(nameDisplay);
    // scoreSectionDiv.appendChild(scoreDisplay);
    // })

    var introButton = document.createElement("button");
    introButton.innerHTML = "Refresh Quiz";
    introButton.setAttribute("onclick", "refreshPage()");
    scoreSectionDiv.appendChild(introButton);

}


function refreshPage(){
    window.location.reload();
}

buttonEl.addEventListener("click", generateQuestion);
restartButtonEl.addEventListener("click", restartGame);
saveScoreEl.addEventListener("click", saveScore);
viewScoresEl.addEventListener("click", displayScores);