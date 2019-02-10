/*
Write a script that lists files in current directory,
filtered by a given extension from the command line.
*/
console.log("current working directory: " + process.cwd())
const args = process.argv.slice(2)
console.log("command arg - extension: ." + args[0])
const path = require('path');
const fs = require('fs');
fs.readdir(process.cwd(), function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    // list teh files
    files.forEach(function (file) {
        if(file.indexOf('.'+args[0]) > -1) {
            console.log(file); 
        } 
    });
});

/Users/goragottsen/Desktop/gbc/comp3133/labs/lab5/ex1.js