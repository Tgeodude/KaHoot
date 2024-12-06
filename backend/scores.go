package scores

import (
	"sync"
)

var playerScores = make(map[string]int)
var mu sync.Mutex

// Обновление счета игрока
func UpdateScore(playerName string, score int) {
	mu.Lock()
	defer mu.Unlock()
	playerScores[playerName] += score
}

// Получить счет игрока
func GetPlayerScore(playerName string) int {
	mu.Lock()
	defer mu.Unlock()
	return playerScores[playerName]
}

// Сбросить счета
func ResetScores() {
	mu.Lock()
	defer mu.Unlock()
	playerScores = make(map[string]int)
}

// Получить все результаты
func GetScores(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(playerScores)
}
