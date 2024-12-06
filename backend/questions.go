package question

import (
	"encoding/json"
	"net/http"
)

// Структура вопроса
type Question struct {
	Question   string   `json:"question"`
	Answers    []string `json:"answers"`
	CorrectAns int      `json:"correct_answer"`
}

// Все вопросы игры
var AllQuestions = []Question{
	{
		Question:   "Какой цвет небо?",
		Answers:    []string{"Красный", "Синий", "Зелёный", "Чёрный"},
		CorrectAns: 1,
	},
	{
		Question:   "Какая столица Франции?",
		Answers:    []string{"Берлин", "Париж", "Мадрид", "Рим"},
		CorrectAns: 1,
	},
	{
		Question:   "Сколько планет в солнечной системе?",
		Answers:    []string{"8", "9", "7", "10"},
		CorrectAns: 0,
	},
	{
		Question:   "Кто написал 'Войну и мир'?",
		Answers:    []string{"Тургенев", "Толстой", "Пушкин", "Достоевский"},
		CorrectAns: 1,
	},
	{
		Question:   "Сколько континентов на Земле?",
		Answers:    []string{"5", "6", "7", "8"},
		CorrectAns: 2,
	},
}

// Функция для добавления вопроса (админская)
func AddQuestion(w http.ResponseWriter, r *http.Request) {
	var newQuestion Question
	if err := json.NewDecoder(r.Body).Decode(&newQuestion); err != nil {
		http.Error(w, "invalid question format", http.StatusBadRequest)
		return
	}

	AllQuestions = append(AllQuestions, newQuestion)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(newQuestion)
}
