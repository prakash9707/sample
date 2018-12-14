// var obj={
//   name:'ram',
//   age:23,
// };
// console.log(obj);
// console.log(JSON.stringify(obj));
// let person = '{"name":"ram","age":23}';
// let json = JSON.parse(person);
// console.log(json.name);

var fs = require('fs');
var arr = [];
var yargs = require('yargs');
var body = yargs.argv.body;
var title = yargs.argv.title;
var obj = {
  body,
  title,
};
var ret = fs.readFileSync('notes.json');
arr = ((JSON.parse(ret)));
console.log(arr[0]);
console.log("The data in the file is");
arr = [1, 2, 3];
arr.forEach((obj) => console.log(obj,+" "));
let i = 0;
var dup = arr.filter(function(obj){
  return obj.title == title;
});
if (dup.length == 0){

  arr.push(obj);
  fs.writeFileSync('notes.json',JSON.stringify(arr));
  console.log("File written success");
}
else console.log("Duplicate data");
