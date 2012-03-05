$ -> 
	$(".textfield").focus()

	socket = new io.connect("http://localhost:3333")

	socket.on "connect", ->
		console.log "your are connected to the chat!"
		$(".chatbox").append( "Welcome to the Django Chat. Type some text and hit ENTER<br>"  )

	socket.on "message", (message) ->
		$(".chatbox").append(message + "<br>")

	$(".textfield").keypress (e) ->
		code = (if e.keyCode then e.keyCode else e.which)
		if code is 13
			unless $(".textfield").val is ""
				socket.emit "message", $(".textfield").val()
				$(".textfield").val ""
				$(".textfield").focus()
			e.preventDefault()


