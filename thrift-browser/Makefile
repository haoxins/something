
server: all
	node server.js

client: all
	node client.js

build:
	docker build -t hx/thrift .

run:
	docker run -p 3003:3003 -it hx/thrift

.PHONY: build, run
