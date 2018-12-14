//tutorial on arrowfunction...
var obj = {
  name : 'prakash',
  func() {
    console.log(this.name);
    console.log(arguments);
    return 1;
  },
};
console.log(obj.func('dsf',3));
// like the above func() the arrow fun will not work as like above this is alow will not work
// console.log(arguments) also will not work in arrowfunction..
