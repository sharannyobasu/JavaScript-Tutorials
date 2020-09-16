/*var firstname = 'John';
console.log(firstname);

var lastname = 'Smith';
var age = 25;

var fullage = true;
console.log(fullage);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var $3ee = 78;
console.log($3ee);

//var function = 23; -> Shows error in console

var job, married;
job = 'teacher';
married = false;

//var lastname = prompt('What is his last name ?');
//console.log('His name is ' + firstname + ' ' + lastname);

var str = 'family';
console.log(typeof str);

var x = 33;
console.log(typeof x);

var gh;
console.log(typeof gh);

var f = false;
console.log(typeof f);

var a = 2000;
var b = 2020;
var c = 17;
var d = c >= b - a;
console.log(d);

a = 6;
b = 20;
var e = a + b / 2;
console.log(e);

var res = 4 + (6 * 8) / 2;
console.log(res);
*/

/*CODING CHALLENGE 1

var mm = 78;
var mh = 170;
var jm = 74,
  jh = 163;
var bmim = mm / (mh * mh);
var bmij = jm / (jh * jh);
var great = bmim > bmij;

console.log("Is Mark's BMI greater than John's BMI ? " + great);
//console.log(bmij, bmim);
*/

/*
var a1 = 56;
var a2 = 33;

if (a1 > a2 * 2) {
  console.log(a1);
} else {
  console.log(a2);
}

var firstname = 'John';
var civilstatus = 23;

if (civilstatus == '23') {
  console.log('Same');
} else {
  console.log('Different');
}
*/

/*Ternary Operator

var age = 17;
age > 18 ? console.log('Adult') : console.log('Too young');

var eligibility = age > 18 ? 'Yes' : 'No';
console.log(eligibility);
*/

/*Switch Statement

var job = 'farmer';

switch (job) {
  case 'Teacher':
    console.log('He is a teacher');
    break;
  case 'driver':
    console.log('He is a driver');
    break;
  case 'farmer':
    console.log('He is a farmer');
    break;
  default:
    console.log('He is nothing !');
    break;
}
console.log('\n');

var age = 19;

switch (true) {
  case age > 18:
    console.log('He is an adult');
    break;
  case age < 18:
    console.log('He is a kid');
    break;
  case age == 18:
    console.log('He is 18 !');
    break;
  default:
    console.log('He is nothing !');
    break;
}
*/

/*Truthy and falsy values

var z = 10;
if (z) {
  console.log('Defined');
} else {
  console.log('Not defined !!!!!');
}
z
  ? console.log('Variable defined !!!!!')
  : console.log('Variable is not defined !!!!!');
*/

/*CODING CHALLENGE 2

var john = 85 + 220 + 300;
var mike = 120 + 250 + 200;
var mary = 110 + 270 + 250;
if (john > mike && john > mary) {
  console.log('John was the best with ' + john);
} else if (mike > john && mike > mary) {
  console.log('Mike was the best with ' + mike);
} else if (mary > john && mary > mike) {
  console.log('Mary was the best with ' + mary);
}
*/
/*Functions
function age(birthyear) {
  return 2020 - birthyear;
}
console.log(age(2001));

function retire(a, b) {
  if (a > 65) {
    console.log(b + ' is already retired !!');
  } else {
    duration = 65 - a;
    console.log(b + ' is going to retire in ' + duration + ' years');
  }
}

retire(43, 'Sudip');
retire(20, 'Sharannyo');
retire(21, 'Arindam');
retire(69, 'Karl');
*/
/*function expression
var x1 = function (job, firstname) {
  switch (job) {
    case 'teacher':
      return firstname + ' teaches kids';
    case 'driver':
      return firstname + ' drives people around !';
    case 'farmer':
      return firstname + ' ploughs the field !';
    default:
      return 'Something else';
  }
};

console.log(x1('teacher', 'Sara'));
console.log(x1('farmer', 'Rajesh'));
console.log(x1('teacher', 'Sara'));
console.log(x1('footballer', 'Leo'));
*/
