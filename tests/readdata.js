//copied code from examples folder on node-serialport github 
'use strict';
var SerialPort = require('serialport');
//var SerialPort = serialport.SerialPort;
var parsers = SerialPort.parsers;
var firstconect = true;


var port = new SerialPort('com4', {
  baudrate: 115200,
  parser: parsers.readline('\r\n')
});

port.on('open', function() {
  console.log('Port open');
});

port.on('data', function(data) {
  console.log(data);
});

//closeport();

function closeport(){
port.close(function (err) {
    console.log('port closed', err);

});
}
