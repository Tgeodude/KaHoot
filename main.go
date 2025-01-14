package main

import (
	"fmt"
	"gitKahoot/backend/game"
	"gitKahoot/backend/questions"
	"gitKahoot/backend/scores"
	"log"
	"net/http"
)

func main() {
	// Обслуживание статических файлов (фронтенд)
	fs := http.FileServer(http.Dir("./frontend_react"))
	http.Handle("/", fs)

	// Инициализация маршрутов API
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
