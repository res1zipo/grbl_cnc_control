var SerialPort = require('serialport');
SerialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
    console.log(port.manufacturer);
    console.log(port.pnpId);

    if (port.serialNumber) {
    	console.log(port.serialNumber);
    }
    if (port.locationId) {
    	console.log(port.locationId);
    }
    if (port.vendorId) {
    	console.log(port.vendorId);
    }
    if (port.productId) {
    	console.log(port.productId);
    }    
  });
});
