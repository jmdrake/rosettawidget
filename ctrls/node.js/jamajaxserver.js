var http = require('http');
var url = require("url");
var fs = require("fs");

var app_port = process.env.app_port || 8080;
var app_host = process.env.app_host || '127.0.0.1';

var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.IP,
  user: process.env.C9_USER,
  password: "",
  database: "c9",
  port: "3306"
});


var server = http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    res.setHeader('Access-Control-Allow-Origin', 'https://preview.c9users.io');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    if(q.path.search("getCategoryItems") == 1){
        console.log("Getting items of category : " + q.query.category);
        con.connect(function(err) {
            console.log("Connecting...");
            if (err) throw err;
            var sql = "SELECT * FROM inventory WHERE Category='" + q.query.category + "'";
            con.query(sql, function (err, result, fields) {
                if (err) throw err;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(result));                
            });
        });
    } else if(q.path.search("getItem") == 1) {
        console.log("Getting item  : " + q.query.item)
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM inventory WHERE id='" + q.query.item + "'", function (err, result, fields) {
                if (err) throw err;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(result));                
            });
        });        
    } 
});

server.listen(app_port);
console.log('Web server running at http://' + app_host + ':' + app_port);