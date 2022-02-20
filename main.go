package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
)

//go:embed out/*
//go:embed out/_next/static/*/*
//go:embed out/_next/static/chunks/pages/*.js

var SsgFS embed.FS

func main(){
	targetFS, errFS := fs.Sub(SsgFS, "out")
	if errFS != nil {
		log.Fatal(errFS)
	}

	http.Handle("/", http.FileServer(http.FS(targetFS)))

	if errLAS := http.ListenAndServe(":9000", nil); errLAS != nil {
		log.Fatalln(errLAS)
	}


}
