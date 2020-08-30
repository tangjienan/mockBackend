var express = require('express');
var app = express();
var port = 8000
var urlPrefix = "";
var swaggerJSON = require("./swagger.json")
var paths = Object.keys(swaggerJSON.paths);
var response = require("./response.json");



//Read response from JSON and create default respose: 400 



//Creating mock apis 

app.post("/pet/:petId/uploadImage", function (req, res) {
	let path = "/pet/{petId}/uploadImage";
	let method = "post"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.post("/pet", function (req, res) {
	let path = "/pet";
	let method = "post"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.put("/pet", function (req, res) {
	let path = "/pet";
	let method = "put"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.get("/pet/findByStatus", function (req, res) {
	let path = "/pet/findByStatus";
	let method = "get"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.get("/pet/findByTags", function (req, res) {
	let path = "/pet/findByTags";
	let method = "get"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.get("/pet/:petId", function (req, res) {
	let path = "/pet/{petId}";
	let method = "get"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.post("/pet/:petId", function (req, res) {
	let path = "/pet/{petId}";
	let method = "post"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.delete("/pet/:petId", function (req, res) {
	let path = "/pet/{petId}";
	let method = "delete"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.post("/store/order", function (req, res) {
	let path = "/store/order";
	let method = "post"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.get("/store/order/:orderId", function (req, res) {
	let path = "/store/order/{orderId}";
	let method = "get"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.delete("/store/order/:orderId", function (req, res) {
	let path = "/store/order/{orderId}";
	let method = "delete"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.get("/store/inventory", function (req, res) {
	let path = "/store/inventory";
	let method = "get"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.post("/user/createWithArray", function (req, res) {
	let path = "/user/createWithArray";
	let method = "post"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.post("/user/createWithList", function (req, res) {
	let path = "/user/createWithList";
	let method = "post"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.get("/user/:username", function (req, res) {
	let path = "/user/{username}";
	let method = "get"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.put("/user/:username", function (req, res) {
	let path = "/user/{username}";
	let method = "put"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.delete("/user/:username", function (req, res) {
	let path = "/user/{username}";
	let method = "delete"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.get("/user/login", function (req, res) {
	let path = "/user/login";
	let method = "get"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.get("/user/logout", function (req, res) {
	let path = "/user/logout";
	let method = "get"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});

app.post("/user", function (req, res) {
	let path = "/user";
	let method = "post"
	let responseIndex = response[path][method]["defaultIndex"]
	res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]
	res.send(response[path][method]["responses"][responseIndex]["response"]);
});




var server = app.listen(port, function () {
	console.log("listening at: 8000")
});