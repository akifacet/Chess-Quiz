const questions = [
    {
        question: "Who is known as the 'Mozart of Chess' due to his exceptional skill and achievements in the game?",
        options: {
            a: "Fabiano Caruana",
            b: "Garry Kasparov",
            c: "Magnus Carlsen",
            d: "Viswanathan Anand"
        },
        correctAnswer: "c"
    },
    {
        question: "Which chess piece would be the life of the party, capable of moving in any direction and any number of squares?",
        options: {
            a: "Bishop",
            b: "Queen",
            c: "Knight",
            d: "Pawn"
        },
        correctAnswer: "b"
    },
    {
        question: "If Magnus Carlsen and Garry Kasparov faced each other in a dance-off instead of a chess match, who would likely take home the trophy?",
        options: {
            a: "Magnus Carlsen",
            b: "Garry Kasparov",
            c: "It would be a draw",
            d: "There wouldn't be a winner; they'd both be too busy analyzing the dance floor!",
        },
        correctAnswer: "c"
    },
    {
        question: "If a chessboard were a kingdom, which piece would be the wise advisor, capable of moving diagonally across the realm?",
        options: {
            a: "Rook",
            b: "Queen",
            c: "Bishop",
            d: "King"
        },
        correctAnswer: "c"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const resultText = document.getElementById("result");
const nextButton = document.getElementById("next-btn");
const scoreValue = document.getElementById("score-value");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    for (const option in currentQuestion.options) {
        const button = document.createElement("button");
        button.textContent = `${option}: ${currentQuestion.options[option]}`;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        resultText.textContent = "Correct!";
        score += 25;
    } else {
        resultText.textContent = `Wrong! The correct answer is ${currentQuestion.correctAnswer}: ${currentQuestion.options[currentQuestion.correctAnswer]}`;
    }

    nextButton.style.display = "block";
    scoreValue.textContent = score;
}

function nextQuestion() {
    resultText.textContent = "";
    nextButton.style.display = "none";
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Quiz completed
        questionText.textContent = "Quiz completed!";
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none";
        scoreValue.textContent = score;
    }
}

// Initial load
loadQuestion();
