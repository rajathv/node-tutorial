
/*
/* METHOD 1
var counter = function(arr){
	return 'There are ' +arr.length+' elements in the array';

};
var pi=3.142;
module.exports.counter =counter;
module.exports.pi=pi;

*/
/* METHOD 2
module.exports.counter = function(arr){
	return 'There are ' +arr.length+' elements in the array';

};
module.exports.pi=3.142;

*/

//MEthod 3
/*
var counter = function(arr){
	return 'There are ' +arr.length+' elements in the array';

};
var pi=3.142;
module.exports = {
	counter:counter,
	pi:pi
}; 
*/
/*
//EVENTS
var events = require('events');
var myEmitter = new events.EventEmtter();
myEmitter.on('someEvent', function(mssg){
	console.log(mssg);
});
myEmitter.emit('someEvent', 'RVG');

*/


//SERVER CREATIO
//Response headers 
//             -Content type
//             -Status


/*

SERVER
var http=require('http');

var server= http.createServer(function(req,res){
	console.log("request was made " + req.url);
	res.writeHead(220,{'Content-Type' :'text/plain'});
	res.end('Hey ninjas');
});

server.listen(3000,'127.0.0.1');
console.log('listening to port 3000');

*/

/*

// Readable stream
var http = require('http');
var fs =require('fs');
var myReadStream = fs.createReadStream(__dirname + '/rvg.txt','utf8');
myReadStream.on('data', function(chunk){
	console.log('new chunk recieved: ');
	console.log(chunk);
})
*/


//Write stream
/*
var http = require('http');
var fs =require('fs');
var myReadStream = fs.createReadStream(__dirname + '/rvg.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+ '/writeme.txt');
myReadStream.on('data', function(chunk){
	console.log('new chunk recieved: ');
	//console.log(chunk);
	myWriteStream.write(chunk);
});
*/
/*
//Pipes for which reads and writes into streams without creating listners
//streaming data to server
var http = require('http');
var fs =require('fs');
var server =http.createServer(function(req,res){
	console.log("request was made " + req.url);
	res.writeHead(220,{'Content-Type' :'text/html'});
var myReadStream = fs.createReadStream(__dirname + '/just.html','utf8');
myReadStream.pipe(res);

});
server.listen(3000,'127.0.0.1');
console.log("listening server at 3000");

*/


/*
//returning a json file
var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'application/json'});
	var myObj = {
		name : 'Rajath V',
		jobTitle: "webDeveloper"
	}
	res.end(JSON.stringify(myObj));
});
server.listen(5711,'127.0.0.1');
console.log("server started");
*/
/* 
npm init // creates package.json to store dependancies used in the node app
*/

/*
//USING Express

var express = require('express');

var app = express()

app.get('/',function(req,res){
	res.send('this is the home page');

});
app.get('/contact', function(req,res){
	res.send('contact page');
});
//To get a certain ID
app.get('/profile/:id', function(req,res){
	res.send('reuested id with ' + req.params.id);
});
app.listen(3000);
*/


//For dealing with dynamic content we use EJS package which can inject data into html file