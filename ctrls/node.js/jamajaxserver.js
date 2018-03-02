var express = require('express');
var app = express();
var util = require('util');
 
var formidable = require('formidable');

var session = require('client-sessions');

var fs = require('fs');

app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

var inventory = require("./inventory");
var users = require("./users");
var components = require("./components");

var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('../..'));

app.get('/getCurrentUserInfo', function(req, res){
  users.getCurrentUserInfo(req.session.currentUser, function(doc){
    res.send(doc);
  })
});

app.post('/loginUser', urlencodedParser, function (req, res) {
  console.log("Current User in login : " + req.session.currentUser);
  users.loginUser(req.body, function(doc){
    if(doc["password"]) {
      delete doc.password;
      req.session.currentUser = doc["_id"];
    }
    res.end("Okay");
    // console.log("Setting Current User : " + req.session.currentUser);
  });
});

app.post('/fubar', urlencodedParser, function (req, res) {
  console.log("Current User in fubar : " + req.session.currentUser);
  users.loginUser(req.body, function(doc){
    if(doc["password"]) {
      delete doc.password;
      req.session.currentUser = doc["_id"];
    }
    res.end(JSON.stringify(doc));
  });
});

app.get('/logoutUser', function (req, res) {
  req.session.forget('currentUser');
  req.send({"ok":"true"});
});

app.get('/getCategoryItems', function (req, res) {
  console.log("Getting items of category : " + req.query.category);
  res.setHeader('Content-type', 'text/plain' );
  inventory.getCategoryItems(req.query.category, function(results){
    res.end(JSON.stringify(results));
  })   
});

app.get('/getItem', function (req, res) {
  console.log("Getting item  : " + req.query.item);
  res.setHeader('Content-type', 'text/plain' );
  inventory.getItem(req.query.item, function(results){
    res.end(JSON.stringify(results));
  })
});


// POST /login gets urlencoded bodies
app.post('/registerUser', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  users.registerUser(req.body, function(results){
    console.log(results);
    if(results["ok"]) {
      req.session.set('currentUser', req.body.username);
      res.send(JSON.stringify(results));
    } else {
      console.log(results.message);
      res.send(JSON.stringify(results.message));
    }
  })
});

app.get('/getCurrentUser', function(req, res){
  console.log("Current User : " + req.session.currentUser);
  res.end(req.session.currentUser);
});

app.get('/getCurrentUserInfo', function(req, res){
  users.getCurrentUserInfo(req.session.get("currentUser"), function(doc){
    req.end(doc);
  })
});

app.get("/getComponents", function(req, res){
  components.getComponents(req.query.template, req.query.page, function(results){
    res.end(JSON.stringify(results));
  })
});


app.post('/upload', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
    var form = new formidable.IncomingForm();
    console.log("Uploading file");
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      var newpath = "../../uploads/" + fields.name;
      var oldpath = files.file.path;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
        console.log('File uploaded and moved');
      });
    });
});


app.post("/updateComponent", urlencodedParser, function(req, res){
  if (!req.body) return res.sendStatus(400);
  components.updateComponent(req.body, function(results){
    res.end(JSON.stringify(results));
  });
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});