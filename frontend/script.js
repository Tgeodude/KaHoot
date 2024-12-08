let currentQuestionIndex = 0;
let score = 0;
const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const scoreContainer = document.getElementById("score");

// Функция для получения вопроса
function getQuestion() {
    fetch(`http://localhost:8080/question?index=${currentQuestionIndex}`)
        .then((response) => response.json())
        .then((data) => {
            // Обновление интерфейса вопросом и ответами
            questionContainer.innerText = data.question;
            answersContainer.innerHTML = ""; // Очищаем ответы
            data.answers.forEach((answer, index) => {
                const button = document.createElement("button");
                button.innerText = answer;
                button.onclick = () => submitAnswer(index);
                answersContainer.appendChild(button);
            });
        })
        .catch((error) => {
            console.error("Ошибка при получении вопроса:", error);
        });
}

// Функция для отправки ответа
function submitAnswer(answerIndex) {
    fetch("http://localhost:8080/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            player_name: "Player1",
            question_id: currentQuestionIndex,
            answer: answerIndex,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            score = data.score;
            scoreContainer.innerText = `Score: ${score}`;
        })
        .catch((error) => {
            console.error("Ошибка при отправке ответа:", error);
        });
}

// Функция для перехода к следующему вопросу
function nextQuestion() {
    currentQuestionIndex++;
    getQuestion();
}

// Загрузка первого вопроса при открытии страницы
getQuestion();
