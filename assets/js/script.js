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

    scoreSectionEl.classList.add("high-score-display");
    introductionEl.remove();
    scoreContainerEl.classList.add("score-display");
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
    var localStorageData = JSON.parse(localStorage.getItem("high-score"));
    if (localStorageData === null) {
        localStorage.setItem("high-score", []);
    }
    var data = {name: userInitialsEl.value, score: scoreCount};
    localStorageData.push(data);
    localStorage.setItem("high-score", JSON.stringify(localStorageData));
}

function displayScores() {  
    scoreSectionEl.classList.remove("high-score-display");
    scoreContainerEl.classList.add("score-display");
    sectionContainerEl.classList.add("quiz-display");
    introductionEl.remove();

    var scoreSectionTitle = document.createElement("h1");
    scoreSectionTitle.innerHTML = "Here are the high scores!";
    scoreSectionTitle.className = "title";
    scoreSectionTitle.setAttribute("style", "margin: 0 auto;");
    scoreSectionEl.appendChild(scoreSectionTitle);

    var scoreTable = document.createElement("table");
    scoreTable.setAttribute("style", 'margin: 0 auto;')
    scoreSectionEl.appendChild(scoreTable);

    var scoreTableHeader = document.createElement("thead");
    scoreTable.appendChild(scoreTableHeader);

    var scoreTableName = document.createElement("th");
    scoreTableName.innerHTML = "Name";
    scoreTableName.className = "display-title";
    scoreTableHeader.appendChild(scoreTableName);

    var scoreTableScore = document.createElement("th");
    scoreTableScore.innerHTML = "Score";
    scoreTableScore.className = "display-title";
    scoreTableHeader.appendChild(scoreTableScore);

    var scoreTableBody = document.createElement("tbody");
    scoreTableBody.setAttribute("style", "text-align: center; font-size: 2em; margin-top: 10px");
    scoreTable.appendChild(scoreTableBody);

    var dataDisplay = JSON.parse(localStorage.getItem("high-score"));
    for (var i = 0; i < dataDisplay.length; i++){

        var tableRow = document.createElement("tr");
        scoreTableBody.appendChild(tableRow);

        var userName = document.createElement("td");
        userName.innerHTML = dataDisplay[i].name;
        userName.className = "user-info";
        tableRow.appendChild(userName);

        var userScore = document.createElement("td");
        userScore.innerHTML = dataDisplay[i].score;
        userScore.className = "user-info";
        tableRow.appendChild(userScore);
    }
    var buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("style", "width: 50%; text-align: center; margin: 0 auto;")
    scoreSectionEl.appendChild(buttonDiv);

    var refreshButton = document.createElement("button");
    refreshButton.innerHTML = "Refresh Quiz";
    refreshButton.setAttribute("onclick", "restartGame()");
    refreshButton.className = "btn";
    buttonDiv.appendChild(refreshButton);
}

buttonEl.addEventListener("click", generateQuestion);
restartButtonEl.addEventListener("click", restartGame);
saveScoreEl.addEventListener("click", saveScore);
viewScoresEl.addEventListener("click", displayScores);