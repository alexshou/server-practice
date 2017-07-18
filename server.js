let http = require('http');
const PORT1 = 7000; //number greater than 80
const PORT2 = 7500;
let server1 = http.createServer(function(request, response){
	console.log('Request @ ' + request.url);
 	response.end('<h1>I am happy!</h1>');
 });

server1.listen(PORT1, function(){
	console.log('Connection port initiated http://localhost:${PORT1}');
});


let server2 = http.createServer(function(request, response){
	console.log('Request @ ' + request.url);
 	response.end('<h1>I am too busy to get back to visit hometown!</h1>');
 });

server2.listen(PORT2, function(){
	console.log('Connection initiated http://localhost:${PORT2}');
});
