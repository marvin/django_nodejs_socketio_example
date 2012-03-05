
$(function() {
  var socket;
  $(".textfield").focus();
  socket = new io.connect("http://localhost:3333");
  socket.on("connect", function() {
    console.log("your are connected to the chat!");
    return $(".chatbox").append("Welcome to the Django Chat. Type some text and hit ENTER<br>");
  });
  socket.on("message", function(message) {
    return $(".chatbox").append(message + "<br>");
  });
  return $(".textfield").keypress(function(e) {
    var code;
    code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) {
      if ($(".textfield").val !== "") {
        socket.emit("message", $(".textfield").val());
        $(".textfield").val("");
        $(".textfield").focus();
      }
      return e.preventDefault();
    }
  });
});
