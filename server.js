var io;

io = require("socket.io").listen(3333);

console.log("Server startet on 127.0.0.1 port 3333");

io.sockets.on("connection", function(socket) {
  console.log("client conntected!");
  return socket.on("message", function(message) {
    io.sockets.emit("message", message);
    return console.log(message);
  });
});
