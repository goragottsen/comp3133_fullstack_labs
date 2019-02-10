// Bonus
/*
Write a script that reads input from the CLI (command line interface) 
and logs the uppercased version of the input after Enter is pressed. 
It should continuously prompt User for an input and end on Ctrl-C + Ctrl-X. 
Hint, use process stdout and stdin
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Input: '
  });

  rl.prompt();

  rl.on('line', (line) => {
    switch (line.trim()) {
        default:
            console.log(`Output: ${line.trim().toUpperCase()}`);
            break;
    }
    rl.prompt();
  });
  
//  var f = rl.question('Input: ', (answer) => {
//     console.log(`Output: ${answer.toUpperCase()}`);
//   });
