'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order Recived! ${this.starterMenu[starterIndex]} 
       and ${this.mainMenu[mainIndex]} will be delivered to
       ${adress} at ${time}`
    );
  },

  orderingPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious Pasta and Ingridients are
                ${ing1}, ${ing2}, ${ing3}`);
  },
};

/*
// Calling an function of an object destructuring 
restaurant.orderDelivery({
  time: '22:30',
  adress: 'Via del Sole, 21',
  mainIndex: 0,
  starterIndex: 2,
});
/*


/*
//1. Destructuring an array
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z)
let [first, second] = restaurant.categories; //Second Element is skipped
console.log(first, second);

// Interchange variables values
[first, second] = [second, first];
console.log(first, second);

const [starter, main] = restaurant.order(0, 2);
console.log(starter, main);
*/
/*
// 2. Destructuring Object
//debugger;
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: nameRestaurant,
  openingHours: hours,
  categories: tag,
} = restaurant;
console.log(nameRestaurant, hours, tag);

//Default and non existing attributes
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutate Variables

let a = 122;
let b = 33;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // Mutate variables a and b
console.log(a, b);
*/
/*
//3. Spread Operator

const arr = [7, 8, 9];
const newArr = [1, 2, 3, ...arr];
console.log(newArr); // newArr[1,2,3,7,8,9]

const newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(newMenu); //  Join two arrays

//Iterables Maps, Sets , Strings Arrays but NO objects

const str = 'Jonas';
const letters = [...str, ' ', 's'];
console.log(letters); //["J", "o", "n", "a", "s", " ", "s"]

const ingridients = [
  prompt("Let's make pasta! Ingridient 1?"),
  prompt('Ingridient 2?'),
  prompt('Ingredient 3?'),
];

restaurant.orderingPasta(...ingridients);


//Shallow Copy Objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Donde Carlos';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// On the left is call Rest Pattern
const { sat, ...week } = restaurant.openingHours;
console.log(sat, week);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(add(50, 20, 10, 30));

const x = [23, 5, 7];
console.log(add(...x));
*/

//Code Challenge

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Code Challenge 2
/*
//1.
const goals = [...game.scored];

let iterator = goals.entries();
for (const [goal, name] of iterator) {
  console.log(`Goal ${goal + 1}: ${name} `);
}

//2.
const values = Object.values(game.odds);
let avg = 0;
for (let i = 0; i < values.length; i++) {
  avg += values[i];
}
avg = avg / values.length;
console.log(avg);

//3.
const odds = Object.entries(game.odds);
console.log(odds);
for (const [team, name] of odds) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${name}`);
}
*/

/*
//Code Challenge 1
//1.
//let player1 = game.player[0];
//let player2 = game.player[1];
const [player1, player2] = game.players;

//2.
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);
//3.
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const playersFinal = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals werer score`);
};

printGoals(...game.scored);
*/

//LOOP ARRAYS
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
const x = [1, 2];

for (const item of menu) console.log(item);

let iterator = menu.entries();
for (let e of iterator) {
  console.log(e);
}
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

//LOOPING OBJECTS

/*
//Property names
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (let day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//Properties Values
const values = Object.values(restaurant.openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

// [Key , Value = [open,close]]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
/*
// Sets
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Fierenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('open'));

const time = 9;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);

const arr = [1, 2]; // Create array same memory location
rest.set(arr, 'Test');
console.log(rest.get(arr));
*/

//Iterable Maps
const question = new Map([
  ['question', 'What is the best programming Lenguague '],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(question);
/*
const openingHours = restaurant.openingHours;
console.log(openingHours, restaurant.openingHours);
//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));
*/
//Map to Array
//console.log([...question.keys()]);

// Code Challenge 3
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const array = [...gameEvents.values()];
const events = new Set(array);

console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.Average

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happen on average , every ${time / gameEvents.size} minutes`
);

//4.Loop and if less than 45 FIRST HALF or > 45 SECOND HALF
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log([`${half} ${min}: ${event}`]);
}
*/

//STRINGS

const airplane = 'TAP Air Portugal';
const plane = 'A320';
let edge = false;
console.log(airplane.slice(-1)); // [l]

const checkMiddSeat = function (seat) {
  while (edge === false) {
    //B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'C') {
      console.log(`Bad luck your seat${seat} is at the middle`);
      break;
    } else {
      console.log(`Your are lucky your seat  ${seat} is at the edge`);
      edge = true;
      break;
    }
  }
};

checkMiddSeat(prompt('What is your seat'));
