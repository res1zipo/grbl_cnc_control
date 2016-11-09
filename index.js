// var SerialPort = require('serialport');
// SerialPort.list(function (err, ports) {
//   ports.forEach(function(port) {
//     console.log(port.comName);
//     console.log(port.manufacturer);
//     if (port.serialNumber) {
//     	console.log(port.serialNumber);
//     }
//     console.log(port.pnpId);
//     if (port.locationId) {
//     	console.log(port.locationId);
//     }
//     if (port.vendorId) {
//     	console.log(port.vendorId);
//     }
//     if (port.productId) {
//     	console.log(port.productId);
//     }    
//   });
// });
'use strict';
var SerialPort = require('serialport');
//var SerialPort = serialport.SerialPort;
var parsers = SerialPort.parsers;

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