/*
All Stream object are the EventEmitter object' instance。commonly used events：
1. data   - trigger when the data readable.
2. end    - trigger when no more data readable.
3. error  - trigger when an error during receiving and writing
4. finish - trigger when all data has been written to the system
*/

// import the fs module
var fs = require("fs");

var data = '';

// create readable stream
var readerStream = fs.createReadStream('input.txt');

// set encoding to utf-8
readerStream.setEncoding('utf-8')

readerStream.on('data', function (chuck) {
  data += chuck;
});

readerStream.on('end', function (chuck) {
  console.log(data);
});

readerStream.on('error', function (err) {
  console.log(err.stack);
});

var dataTOWrite = "this is the string being written"

// create a writable stream to write to the file named output.txt
var writerStream = fs.createWriteStream('/public/output.txt');

// use utf-8 encoding to write the data
writerStream.write(dataTOWrite,'utf-8');

// mark the end of file
writerStream.end();

// handle stream events --> finish,error
writerStream.on('finish', function () {
  console.log("writing end")
});
writerStream.on('error', function (err) {
  console.log(err.stack)
})
console.log('program end')  