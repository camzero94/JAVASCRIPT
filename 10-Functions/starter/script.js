'use strict';
/*
const oneWord = str => {
  return str.replace(/ /g, '').toUpperCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// High Order Function
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
//console.log(upperFirstWord('JavaScript is the best'));

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = () => console.log('Hi5');
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/
/*
//Return functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
//greeterHey('Jonas');
*/
/*
//Call Method
const lufthansa = {
  name: 'Lufthansa',
  iataCode: ' LU',
  booking: [],

  book(fligthNum, namePerson) {
    console.log(
      `${namePerson} booked a seat on ${this.name} fligth ${this.iataCode} ${fligthNum}`
    );
    this.booking.push({
      fligth: `${this.iataCode} ${fligthNum}`,
      namePerson,
    });
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(49, 'Camilo');

//We want to copy to use same function book() in the object euroWings
const euroWings = {
  name: 'Euro Wings',
  iataCode: 'EU',
  booking: [],
};
//Pass the function to a variable
const book = lufthansa.book;

//Does NOT WORK because this-keyword points to undifened
//THIS-KEYWORD depends of how the function is call
//book(23, 'Camilo');

book.call(euroWings, 23, 'Daniel'); // Daniel booked a seat on Euro Wings fligth EU 23
book.call(lufthansa, 45, 'Daniel'); // Daniel booked a seat on Lufthansa fligth  LU 23

console.log(lufthansa);
console.log(euroWings);

//Bind Method

const bookEW = book.bind(euroWings);
const bookLU = book.bind(lufthansa);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Jessica Spelberg');

//With Events Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//PARTIAL Application
//We pre-set the rate to 23%
const addTAX = (rate, value) => value + value * rate;
const addVAT = addTAX.bind(null, 0.23);

console.log(addVAT(100));
*/

// CLOSURE

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();

//Why remember the passengerCount variable ?? Ans: Because Closure

booker(); //1 passenger
booker(); //2 passenger
booker(); //3 passenger
