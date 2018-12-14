// let fs = require('fs');
// let os = require('os');
//
// fs.appendFileSync('hello.txt', os.userInfo()['username']+" "+file.fun());
// const f = require('lodash');
// console.log(f.isString('abc'));
// console.log(f.uniq([1,2,1,2,1,3,4,5]));
// console.log(process.argv); // this used for printing command line input along with other information
// console.log(process.argv[2]); // this gives exact input that we give during command line node app.js myinput
const yargs = require('yargs');
var file = require('./demo.js');
// console.log(file.fun(yargs.argv.title, yargs.argv.body)); // for this command line input is node app.js str --title 'df' --body 'df'
let arr = [100,65, 9, 18, 7, 5];
// let valid = arr.filter((temp) => temp >= 18);
// console.log(valid);
arr.forEach((obj) => file.fun(obj));
