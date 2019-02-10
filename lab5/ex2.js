/*
Using the process object write a script that logs the following
- OS platform
- processor architecture
- version of NodeJS 
- version of V8 
- version of LibUV 
- PID
- title
- working directory
*/

console.log("=====System=====");
console.log(`platform: ${process.platform}`)
console.log(`architecture: ${process.arch}`);
console.log("=====Node.js=====");
console.log(`node version: ${process.version}`);
console.log(`V8 version: ${process.versions['v8']}`);
console.log(`libuv version: ${process.versions['uv']}`);
console.log("=====Process=====");
console.log(`pid: ${process.pid}`);
console.log(`title: ${process.title}`);
console.log(`Current directory: ${process.cwd()}`);