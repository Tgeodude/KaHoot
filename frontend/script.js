let currentQuestionIndex = 0;
let score = 0;
let playerName = prompt("Введите ваше имя");

const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const scoreContainer = document.getElementById("score");

function getQuestion() {
    fetch(`http://localhost:8080/question?index=${currentQuestionIndex}`)
        .then(response => response.json())
        .then(data => {
            questionContainer.innerText = data.question;
            answersContainer.innerHTML = '';
            data.answers.forEach((answer, index) => {
                const button = document.createElement("button");
                button.innerText = answer;
                button.onclick = () => submitAnswer(index);
                answersContainer.appendChild(button);
            });
        });
}

function submitAnswer(answer) {
    fetch("http://localhost:8080/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            player_name: playerName,
            answer: answer
        })
    })
    .then(response => response.json())
    .then(data => {
        score = data.score;
        scoreContainer.innerText = `Очки: ${score}`;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= 5) {
        alert("Игра завершена!");
    } else {
        getQuestion();
    }
}

window.onload = getQuestion;
