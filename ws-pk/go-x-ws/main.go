package main

import "golang.org/x/net/websocket"
import "net/http"
import "log"
import "io"

func echoServer(ws *websocket.Conn) {
	io.Copy(ws, ws)
}

func main() {
	wsHandler := websocket.Handler(echoServer)

	log.Println("serve on 3000")
	http.ListenAndServe(":3000", wsHandler)
}
