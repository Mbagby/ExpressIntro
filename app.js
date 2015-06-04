//bring in the express module
var express = require("express");
//call the express function, return an object
var app = express();

app.set("view engine", "ejs");

// app.get("/", function(request, response){
// 	// response.send("Hello World");
// 	var name = "Madeline";
// 	response.render("index", {personName:name});
// });

app.get("/person/:name", function(request, response){
	var person = request.params.name;
	response.render("person", {specificPerson:person});
});

app.get("/calculator/:num1/:num2", function(request, response){
	var sum = Number(request.params.num1) + Number(request.params.num2)
	response.render("calculator", {number:sum});
});

// app.get("/calculator/:num1/:num2", function(request, response){
// 	var subtract = Number(request.params.num1) - Number(request.params.num2)
// 	response.render("calculator", {number:subtract});
// });

// app.get("/calculator/:num1/:num2", function(request, response){
// 	var multiply = Number(request.params.num1) * Number(request.params.num2)
// 	response.render("calculator", {number:multiply});
// });

// app.get("/calculator/:num1/:num2", function(request, response){
// 	var devide = Number(request.params.num1) / Number(request.params.num2)
// 	response.render("calculator", {number:devide});
// });

//localhost:3000/
app.listen(3000, function(){
	console.log("Server starting on port 3000");
});