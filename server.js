// Author Yahel Nachum

var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  var htmlPage = fs.readFileSync(path.join(__dirname, '/public/home.html')).toString();
  htmlPage = addNavBar(htmlPage);
  res.write(htmlPage);
  res.end();
});

function addNavBar(htmlPage){
	var navBarHtml = fs.readFileSync(path.join(__dirname, '/public/navigationbar.html')).toString();
	htmlPage = htmlPage.replace("NAVIGATION BAR HERE", navBarHtml);
	return htmlPage;
}

app.get('/whoweare', function(req, res) {
  var htmlPage = fs.readFileSync(path.join(__dirname, '/public/whoweare.html')).toString();
  htmlPage = addNavBar(htmlPage);
  res.write(htmlPage);
  res.end();
});

app.get('/perennial', function(req, res) {
  var htmlPage = fs.readFileSync(path.join(__dirname, '/public/perennial.html')).toString();
  htmlPage = addNavBar(htmlPage);
  res.write(htmlPage);
  res.end();
});

app.get('/blog', function(req, res) {
  var htmlPage = fs.readFileSync(path.join(__dirname, '/public/blog.html')).toString();
  htmlPage = addNavBar(htmlPage);
  res.write(htmlPage);
  res.end();
});

app.listen(port, function() {
  console.log('App is listening on port ' + port);
});