package main

import (
	"fmt"
	"kahoot-clone/backend/game"
	"log"
	"net/http"
	"questions"
	"scores"
)

func main() {
	// Инициализация маршрутов
	http.HandleFunc("/start", game.StartGame)
	http.HandleFunc("/question", game.GetQuestion)
	http.HandleFunc("/submit", game.SubmitAnswer)
	http.HandleFunc("/next", game.NextQuestion)
	http.HandleFunc("/scores", scores.GetScores)
	http.HandleFunc("/addquestion", questions.AddQuestion)

	// Запуск сервера
	fmt.Println("Server is running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
