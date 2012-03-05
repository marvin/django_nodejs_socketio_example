io = require("socket.io").listen(3333)

console.log "Server startet on 127.0.0.1 port 3333"

io.sockets.on "connection", (socket) ->
	console.log "client conntected!"

	socket.on "message", (message) ->
		socket.emit "message", message
		console.log message