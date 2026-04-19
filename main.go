package main

import (
	"encoding/json"
	"net/http"
	"os"
)

type GoogleResponse struct {
	Credential string `json:"credential"`
}

func loginHandler(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	var data GoogleResponse
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		http.Error(w, "Gagal decode JSON", http.StatusBadRequest)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	response := map[string]string{
		"status":  "success",
		"message": "Backend Golang berhasil menerima token Google!",
	}
	json.NewEncoder(w.Encode(response))
}

func main() {

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.HandleFunc("/login", loginHandler)
	http.ListenAndServe(":"+port, nil)
}