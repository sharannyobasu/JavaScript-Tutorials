///////////////////////////////////////
// Lecture: Hoisting

calcage(1965);
function calcage(year) {
  console.log(2016 - year);
}

console.log(age);
var age = 23;
//console.log(age);

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

/*
var c = 23;
function callus() {
  var c = 46;
  this.c++;
  console.log(this.c);
}
callus();
console.log(c);
*/

console.log(this);

var obj = {
  a: 45,
  b: 46,
  c: 47,
  d: 48,
  num: function () {
    console.log(this);
    function inner1() {
      console.log(this);
    }
    inner1();
  },
};
obj.num();

var a = function () {
  console.log('Yes');
};
var b = a;
b();
b();
console.log(b);
