#/bin/bash

run:
	rm -rf ./out && cp -r ./schemode/out ./out && go run main.go