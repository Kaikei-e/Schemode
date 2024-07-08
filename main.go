package main

import (
	"embed"
	"encoding/json"
	"io/fs"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"schemode/domain"
)

//go:embed out/*
//go:embed out/_next/static/*/*
//go:embed out/_next/static/chunks/pages/*.js

var SsgFS embed.FS

func main() {
	targetFS, errFS := fs.Sub(SsgFS, "out")
	if errFS != nil {
		log.Fatal(errFS)
	}

	http.Handle("/", http.FileServer(http.FS(targetFS)))

	http.HandleFunc("/api/v1/exportCBTSession", func(w http.ResponseWriter, r *http.Request) {
		var sessionStatements []domain.TheOpinion
		if err := json.NewDecoder(r.Body).Decode(&sessionStatements); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		groupedStatements := domain.GroupByMode(sessionStatements)

		var sessionStatementsResponse []map[string]interface{}
		for mode, statements := range groupedStatements {
			var sessionStatement []domain.TheOpinionResponse
			for _, v := range statements {
				sessionStatement = append(sessionStatement, domain.TheOpinionResponse{
					Mode: domain.ModeNumToText(v.Mode),
					ID:   v.ID,
					Text: v.Text,
				})
			}
			sessionStatementsResponse = append(sessionStatementsResponse, map[string]interface{}{
				"mode":       domain.ModeNumToText(mode),
				"statements": sessionStatement,
			})
		}

		tNow := time.Now()
		tNowStr := tNow.Format("2006-01-02_15-04-05")
		fName := filepath.Clean(filepath.Join("cbt_session_" + tNowStr + ".json"))
		wd, err := os.Getwd()
		if err != nil {
			panic(err)
		}
		sessionDir := filepath.Join(wd, "sessions")
		if err := os.MkdirAll(sessionDir, os.ModePerm); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		fPath := filepath.Join(sessionDir, fName)
		f, err := os.Create(fPath)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer f.Close()

		writeData, err := json.Marshal(sessionStatementsResponse)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		if _, err := f.Write(writeData); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		sessionLogPlace := sessionLogPlace{
			Path:     fPath,
			Filename: fName,
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(sessionLogPlace)

	})

	if errLAS := http.ListenAndServe(":9000", nil); errLAS != nil {
		log.Fatalln(errLAS)
	}
}

type sessionLogPlace struct {
	Path     string `json:"path"`
	Filename string `json:"filename"`
}
