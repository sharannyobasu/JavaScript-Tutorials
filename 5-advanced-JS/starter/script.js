//function constructor

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
