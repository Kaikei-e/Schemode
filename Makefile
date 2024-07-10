#/bin/bash

run:
	rm -rf ./out && cd ./schemode && npm run build-ex && cd ../ && cp -r ./schemode/out ./out && go run main.go

run_windows:
	del /q out && xcopy schemode\out out /s /e /h /k /y && go run main.go