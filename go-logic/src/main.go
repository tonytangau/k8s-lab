package main

import (
    "encoding/json"
    "log"
    "net/http"
    "github.com/gorilla/mux"
    "github.com/tonytangau/sentiment"
)

type SentimentRequest struct {
    Sentence  string `json:"sentence,omitempty"`
}

type SentimentResponse struct {
    Polarity float32 `json:"polarity"`
}

var model sentiment.Models

func main() {
	model, _ = sentiment.Restore()

    r := mux.NewRouter()
    r.HandleFunc("/analyse/sentiment", CalculateScore).Methods("POST")
    log.Fatal(http.ListenAndServe(":5000", r))
}

func CalculateScore(w http.ResponseWriter, r *http.Request) {
    var req SentimentRequest
    _ = json.NewDecoder(r.Body).Decode(&req)
    
	analysis := model.SentimentAnalysis(req.Sentence, sentiment.English)

    var res SentimentResponse
    res.Polarity = analysis.Average

    json.NewEncoder(w).Encode(res)
}