/*
Given compute.js file, create a script that will use the child process 
module and fork a child process that will execute the compute script and do 
the following:
- send a message to the child process to start the calculation
- create an event listener to receive the message sent from child process and log result
*/

var cp = require('child_process');
var child = cp.fork('./compute')

child.on('message', function(m){
    // Receiving results from child
    console.log('Long computation result: ' + m)
})

child.send('Please compute');