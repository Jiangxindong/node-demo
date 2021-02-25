// import the event module
var events = require('events');

//  create a eventEmitter object
var eventEmitter = new events.EventEmitter();

// create a event handler
var connectHandler = function connected() {
  console.log("connect success")
  
  // trigger the data_received event
  eventEmitter.emit('data_received');
}

// bind the program of connection event handler
eventEmitter.on('connection', connectHandler);

// use Anonymous Functions to bind data_reciver event
eventEmitter.on('data_received', function () {
  console.log('data receive success')
});

// trigger the connection event
eventEmitter.emit('connection');

console.log('program end');