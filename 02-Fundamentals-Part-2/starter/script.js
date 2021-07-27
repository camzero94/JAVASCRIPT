// ARRAY IN JS
/*
const calTips = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.5;
}

const arrCalc = function (bill) {

    for (let i = 0; i < bill.length; i++) {
        tips.push(calTips(bill[i]));
    }
}

const clear = function (tips) {
    let size = tips.length;
    while (size != -1) {
        tips.pop();
        size--;
    }
}
const bill = [150, 200, 550];
const tips = [];

arrCalc(bill);
console.log(tips);
clear(tips)
console.log(tips);

console.log(bill.indexOf(200));
*/
// OBJECT IN JAVASCRIPT
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedmant',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

const keyName = 'Name';
console.log(jonas.firstName);
console.log(jonas['first' + keyName]);
console.log(jonas['last' + keyName]);


function askUser() {
    const interestedIn = prompt('What do you wanna know about Jonas?\n\Choose between firstName, lastName, age, job and friend');

    if (jonas[interestedIn]) {
        alert(`The Answer is ${jonas[interestedIn]}`);
    } else {
        alert('Wrong request!');
        askUser();
    }
}
askUser();
*/

//OBJECT METHODS
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedmant',
    birthDay: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],

    calcAge: function () {
        this.age = 2037 - this.birthDay
        return;
    }, // this keyword is the all object

};
console.log(jonas.calcAge()); // We need first to call explicitly the method calcAge to works well
console.log(jonas.age);
console.log(jonas['age']);
*/

// FOOR LOOPS

const jonas = [
  "Jonas",
  "Schmedmant",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
