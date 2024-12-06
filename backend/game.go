package game

import (
	"encoding/json"
	"fmt"
	"questions"
	"scores"
	"net/http"
	"strconv"
	"sync"
)

var currentQuestionIndex int
var gameStarted bool
var mu sync.Mutex

// Старт игры
func StartGame(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()

	if gameStarted {
		http.Error(w, "Игра уже началась", http.StatusBadRequest)
		return
	}

	gameStarted = true
	currentQuestionIndex = 0
	scores.ResetScores()

	http.Redirect(w, r, "/question?index=0", http.StatusSeeOther)
}

// Получить текущий вопрос
func GetQuestion(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()

	if !gameStarted {
		http.Error(w, "Игра не началась", http.StatusBadRequest)
		return
	}

	index := r.URL.Query().Get("index")
	if index == "" {
		http.Error(w, "index parameter is required", http.StatusBadRequest)
		return
	}

	i, err := strconv.Atoi(index)
	if err != nil || i < 0 || i >= len(questions.AllQuestions) {
		http.Error(w, "invalid index", http.StatusBadRequest)
		return
	}

	// Отправляем вопрос
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(questions.AllQuestions[i])
}

// Ответить на вопрос
func SubmitAnswer(w http.ResponseWriter, r *http.Request) {
	var data struct {
		PlayerName string `json:"player_name"`
		Answer     int    `json:"answer"`
	}

	// Декодируем JSON из запроса
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	// Проверка правильности ответа
	currentQuestion := questions.AllQuestions[currentQuestionIndex]
	if data.Answer == currentQuestion.CorrectAns {
		scores.UpdateScore(data.PlayerName, 1)
	}

	// Отправляем обновлённый счёт
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]int{
		"score": scores.GetPlayerScore(data.PlayerName),
	})
}

// Перейти к следующему вопросу
func NextQuestion(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()

	if currentQuestionIndex+1 >= len(questions.AllQuestions) {
		http.Error(w, "Игра завершена", http.StatusBadRequest)
		return
	}

	currentQuestionIndex++
	http.Redirect(w, r, fmt.Sprintf("/question?index=%d", currentQuestionIndex), http.StatusSeeOther)
}
