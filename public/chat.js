var socket = io.connect('http://172.20.10.3:4000');

var message = document.getElementById('message');
      handle = document.getElementById('handle');
      btn = document.getElementById('send');
      output = document.getElementById('output');
      feedback = document.getElementById('feedback');

btn.addEventListener('click', function(){
	socket.emit('chat',{
		message: message.value,
		handle: handle.value
	});// this is the function that sends data through the socket to the server

});

message.addEventListener('keypress',function(){
	socket.emit('typing',handle.value);
});

socket.on('chat', function(data){
	 feedback.innerHTML = "";
	output.innerHTML +='<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
	feedback.innerHTML ='<p><em>'+ data + ' is typing...</em></p>';
});

