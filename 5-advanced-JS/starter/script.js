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

/*Functions passed as arguments

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

*/

/* FIRST CLASS FUNCTIONS

function interview(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', explain UX design');
    };
  }
  if (job === 'teacher') {
    return function (name) {
      console.log(name + ', what subject do you teach?');
    };
  } else
    return function (name) {
      console.log(name + ', what do you do?');
    };
}

var teacherquestion = interview('teacher');
teacherquestion('John');

var designerquestion = interview('designer');
designerquestion('Sandra');
designerquestion('Sophia');
designerquestion('Alex');
designerquestion('Bobby');
designerquestion('Rhonda');
designerquestion('Jimmy');

var nothing = interview('mason');
nothing('Sameer');

interview('desiner')('Raju');

*/

/* Invoked Function Expressions

function game() {
  var score = Math.floor(Math.random() * 10);
  if (score > 5) {
    console.log('You win !! ' + score);
  } else {
    console.log('You lose !! ' + score);
  }
}

game();

(function () {
  var score = Math.floor(Math.random() * 10);
  if (score > 5) {
    console.log('You win !! ' + score);
  } else {
    console.log('You lose !! ' + score);
  }
})();

*/

/* CLOSURES IN JS

function retirement(retirementage) {
  var a = ' years left to retire';
  return function (yearofbirth) {
    var age = 2016 - yearofbirth;
    console.log(retirementage - age + a);
  };
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
retirementGermany(2000);

var retirementIndia = retirement(60);
retirementIndia(2000);

retirement(60)(1980);

function interviewclosure(job) {
  return function (name) {
    console.log(name + ' is a ' + job);
  };
}

var interviewteacher = interviewclosure('teacher');
interviewteacher('Sandro');

var interviewplumber = interviewclosure('plumber');
interviewplumber('John');

var interviewmanager = interviewclosure('manager');
interviewmanager('Suman');

interviewclosure('builder')('Bob');

*/

/* CALL() Function in JS

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeofday) {
    if (style === 'formal') {
      console.log(
        'Good ' +
          timeofday +
          ', Ladies and gentlemen. I am ' +
          this.name +
          '. I am a ' +
          this.job +
          ' and I am ' +
          this.age +
          ' years old.'
      );
    } else if (style === 'friendly') {
      console.log(
        "Hey what's up? Good " +
          timeofday +
          ', I am ' +
          this.name +
          '. I am a ' +
          this.job +
          ' and I am ' +
          this.age +
          ' years old !'
      );
    }
  },
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'Designer',
};

john.presentation('formal', 'morning');
john.presentation('friendly', 'evening');

john.presentation.call(emily, 'friendly', 'morning');

var person = {
  fullname: function () {
    console.log(this.name);
  },
};

var person1 = {
  name: 'Lucas Moura',
};

var person2 = {
  name: 'Roberto Soldado',
};

person.fullname.call(person1);
person.fullname.call(person2);

*/

/* Bind, Call Apply
var person = {
  fullname: function () {
    console.log(this.firstname + ' ' + this.lastname);
  },
};

var person1 = {
  firstname: 'Lucas',
  lastname: 'Moura',
};

var person2 = {
  firstname: 'Roberto',
  lastname: 'Soldado',
};

person.fullname.call(person1);
person.fullname.call(person2);

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeofday) {
    if (style === 'formal') {
      console.log(
        'Good ' +
          timeofday +
          ', Ladies and gentlemen. I am ' +
          this.name +
          '. I am a ' +
          this.job +
          ' and I am ' +
          this.age +
          ' years old.'
      );
    } else if (style === 'friendly') {
      console.log(
        "Hey what's up? Good " +
          timeofday +
          ', I am ' +
          this.name +
          '. I am a ' +
          this.job +
          ' and I am ' +
          this.age +
          ' years old !'
      );
    }
  },
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'Designer',
};

var johnfriendly = john.presentation.bind(john, 'friendly');

johnfriendly('dawn');
johnfriendly('evening');
johnfriendly('morning');
johnfriendly('night');

console.log('After this');

var johnmorning = john.presentation.bind(john, 'morning');

johnmorning('formal');
*/
