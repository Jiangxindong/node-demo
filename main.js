// import the fs module
var fs = require("fs")

// use the readFile method and callback function to asynchronously read the data of input.txt
fs.readFile('input.txt', function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});
console.log("program end");