package test

import (
 "bytes"
 "encoding/json"
 "net/http"
 "net/http/httptest"
 "testing"

 "gitKahoot/backend/questions"
)

func TestAddQuestion(t *testing.T) {
	initialCount := len(questions.AllQuestions)
   
	newQuestion := questions.Question{
	 Question:   "Как называется самый большой океан?",
	 Answers:    []string{"Атлантический", "Тихий", "Индийский", "Северный Ледовитый"},
	 CorrectAns: 1,
	}
	body, err := json.Marshal(newQuestion)
	if err != nil {
	 t.Fatalf("Failed to marshal question: %v", err)
	}
   
	req, err := http.NewRequest("POST", "/add", bytes.NewBuffer(body))
	if err != nil {
	 t.Fatalf("Failed to create request: %v", err)
	}
	req.Header.Set("Content-Type", "application/json")
   
	rr := httptest.NewRecorder()
   
	http.HandlerFunc(questions.AddQuestion).ServeHTTP(rr, req)
   
	if rr.Code != http.StatusOK {
	 t.Errorf("Expected status %v but got %v", http.StatusOK, rr.Code)
	}
   
	if len(questions.AllQuestions) != initialCount+1 {
	 t.Errorf("Expected %v questions but got %v", initialCount+1, len(questions.AllQuestions))
	}
   
	addedQuestion := questions.AllQuestions[len(questions.AllQuestions)-1]
	if addedQuestion.Question != newQuestion.Question {
	 t.Errorf("Expected question %q but got %q", newQuestion.Question, addedQuestion.Question)
	}
	if len(addedQuestion.Answers) != len(newQuestion.Answers) {
	 t.Fatalf("Expected answers length %v but got %v", len(newQuestion.Answers), len(addedQuestion.Answers))
	}
	for i := range newQuestion.Answers {
	 if addedQuestion.Answers[i] != newQuestion.Answers[i] {
	  t.Errorf("Expected answer %q but got %q at index %d", newQuestion.Answers[i], addedQuestion.Answers[i], i)
	 }
	}
	if addedQuestion.CorrectAns != newQuestion.CorrectAns {
	 t.Errorf("Expected correct answer %v but got %v", newQuestion.CorrectAns, addedQuestion.CorrectAns)
	}
   }