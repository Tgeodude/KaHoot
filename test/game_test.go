package test

import (
 "encoding/json"
 "net/http"
 "net/http/httptest"
 "testing"

 "gitKahoot/backend/game"
 "gitKahoot/backend/questions"
)


func TestGetQuestion(t *testing.T) {
  questions.AllQuestions = nil
 
  questions.AllQuestions = []questions.Question{
   {
    Question:   "What is 2+2?",
    Answers:    []string{"3", "4", "5"},
    CorrectAns: 1,
   },
  }
 
  reqStart, _ := http.NewRequest("GET", "/start", nil)
  rrStart := httptest.NewRecorder()
  handlerStart := http.HandlerFunc(game.StartGame)
  handlerStart.ServeHTTP(rrStart, reqStart)
 
  if rrStart.Code != http.StatusSeeOther {
   t.Fatalf("failed to start game: got status code %v", rrStart.Code)
  }
 
  req, _ := http.NewRequest("GET", "/question?index=0", nil)
  rr := httptest.NewRecorder()
  handler := http.HandlerFunc(game.GetQuestion)
  handler.ServeHTTP(rr, req)
 
  if rr.Code != http.StatusOK {
   t.Errorf("handler returned wrong status code: got %v want %v",
    rr.Code, http.StatusOK)
  }
 
  var response map[string]interface{}
  err := json.NewDecoder(rr.Body).Decode(&response)
  if err != nil {
   t.Fatalf("could not decode response: %v", err)
  }
 
  if response["question"] != "What is 2+2?" {
   t.Errorf("unexpected question text: got %v, want %v", response["question"], "What is 2+2?")
  }
 }
 