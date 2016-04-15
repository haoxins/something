package main

import "golang.org/x/net/websocket"
import "strconv"
import "time"
import "log"

func main() {
	var count = 0

	for i := 0; i < 200; i++ {
		ws, err := websocket.Dial("ws://localhost:3000", "", "ws://localhost:3000")
		ifError(err)

		go func() {
			for {
				var msg = make([]byte, 1024)
				_, err := ws.Read(msg)
				ifError(err)

				count++
				if count >= 10000 {
					count = 0
					log.Println("bingo")
				}
			}
		}()

		go func(flag int) {
			for {
				time.Sleep(time.Millisecond * 10)
				ws.Write([]byte("hello - " + strconv.Itoa(flag)))
			}
		}(i)
	}

	quit := make(chan bool)
	if <-quit {
	}
}

func ifError(e error) {
	if e != nil {
		log.Fatal(e)
		panic(e)
	}
}
