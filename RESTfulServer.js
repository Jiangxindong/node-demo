var express = require('express');
var app = express();
var fs = require("fs");


//添加的新用户数据
var user = {
  "user5": {
    "name": "mohit",
    "password": "password4",
    "profession": "teacher",
    "id": 5
  }
}

// add a user
app.get('/addUser', function (req, res) {
  // 读取已存在的数据
  fs.readFile("public/users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    data["user5"] = user["user5"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
})

// add a user with post method
app.post('/addUser', function (req, res) {
  console.log("req:");
  console.log(req);
  console.log("res:");
  console.log(res);
  // 读取已存在的数据
  fs.readFile("public/users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    // data["user5"] = user["user5"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
})

// show all user
app.get('/listUsers', function (req, res) {
  fs.readFile("public/users.json", 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
})

// create server
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})