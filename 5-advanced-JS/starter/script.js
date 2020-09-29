/*function constructor

var john = {
  name: 'John',
  yearofbirth: 1990,
  job: 'teacher',
};

var Person = function (name, yearofbirth, job) {
  this.name = name;
  this.yearofbirth = yearofbirth;
  this.job = job;
  this.calcage11 = function () {
    console.log(2016 - this.yearofbirth);
  };
};
Person.prototype.calcage = function () {
  console.log(2016 - this.yearofbirth);
};
Person.prototype.lastname = 'Basu';
var john = new Person('John', 1990, 'teacher');
var sumit = new Person('Sumit', 1999, 'farmer');
var jane = new Person('Jane', 2000, 'asst. teacher');
console.log(sumit);
console.log(john);
console.log(jane);
john.calcage();
sumit.calcage();
console.log(john.lastname);
console.log(jane.lastname);
*/

/* Object.Create in JS


var personProto = {
  calculate: function () {
    console.log(2016 - this.yearofbirth);
  },
};
var john = Object.create(personProto);
john.name = 'John';
john.yearofbirth = 1990;
john.job = 'mason';

var jane = Object.create(PersonProto);

*/

/*Primitives vs Objects

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//objects

var obj1 = {
  name: 'John',
  age: 26,
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//functions

var age = 271;
var obj = {
  name: 'Sharannyo',
  city: 'Kolkata',
};

function change(a, b) {
  a = 301;
  b.city = 'Mohali';
}
change(age, obj);

console.log(age);
console.log(obj.city);

*/

//Functions passed as arguments

var years = [1990, 1965, 1937, 2005, 1998];
function arraycalc(arr, fn) {
  var arrres = [];
  for (var i = 0; i < arr.length; i++) {
    arrres.push(fn(arr[i]));
  }
  return arrres;
}

function calcage(el) {
  return 2016 - el;
}
var ages = arraycalc(years, calcage);
console.log(ages);

function isfullage(el) {
  return el >= 18;
}
var fullages = arraycalc(ages, isfullage);
console.log(fullages);
