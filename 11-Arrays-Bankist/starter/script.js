'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//console.log([...currencies.keys()]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
//SLICE
// Creates Shallow Copy of Array
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(-2));

//SPLICE
//Deletes elements array does MUTATE original
console.log(arr.splice(3)); //["d", "e"]
console.log(arr); // ["a", "b", "c"]
// REVERSE does MUTATE original
console.log(arr.reverse()); // ["a", "b", "c"]

*/

//FOREACH
/*
//Position 0  moves --> curr element
//Position 1 i 1 --> index
//Position 2 array -- > complete arra  y
//Break statement does not work
movements.forEach(function (moves, i, array) {
  if (moves > 0) {
    console.log(`Movement ${i + 1} You deposited ${moves}`);
  } else {
    console.log(`Movement ${i + 1} You Withdraw ${Math.abs(moves)}`);
  }
});
*/

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `        
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/*
const eurotoUSD = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurotoUSD;
});
console.log(movements);
console.log(movementsUSD);
*/

const userName = 'Jonathan Smith';

//This modify the object of the Accounts
//Add a new attribute = user
const createUsername = function (accounts) {
  accounts.forEach(function (acc) {
    acc.user = acc.owner
      .toLowerCase()
      .split(' ') // [jonathan,smith]
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};

createUsername(accounts);

/*
// FILTER METHOD
//Returns an array with onle the positive values
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);
*/

//  REDUCE METHOD
//SNOWBALL
//reduce(callbackFn, initialValue)
//Display Balance
const printBalanceApp = function (account) {
  account.balance = account.movements.reduce(function (curr, mov, i, arr) {
    //console.log(`Iterator ${i}: ${curr}`);
    return curr + mov;
  }, 0);

  labelBalance.textContent = ` ${account.balance} \u20AC`;
};

//Max Value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

//Display Summary
const printDisplaySumary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((curr, mov) => curr + mov, 0);
  labelSumIn.textContent = `${incomes}\u20AC`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((curr, mov) => curr + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}\u20AC`;

  const interestDeposit = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (acc.interestRate / 100))
    //Only deposits greater than 1 euro will pass
    .filter((interest, i, arr) => {
      return interest >= 1;
    })
    .reduce((curr, mov, i, arr) => {
      return curr + mov;
    }, 0);

  labelSumInterest.textContent = `${interestDeposit.toFixed(2)}\u20AC`;
};

/*
//FIND METHOD
console.log(accounts);
//Find First apperance of The Object
const findAccount = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(findAccount);
*/

//IMPLEMENTING USERNAME LOGIN
let currUser; //  Current User
btnLogin.addEventListener('click', function (e) {
  //Prevent Form from Submitting
  e.preventDefault();
  //Find my Account
  currUser = accounts.find(acc => {
    return acc.user === inputLoginUsername.value;
  });
  //Check Pin
  //console.log(currUser);
  // The ? check if currUser exist
  if (currUser?.pin === Number(inputLoginPin.value)) {
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();
    //DISPLAY UI AND MESSAGE
    let welName = currUser.owner.split(' ');
    labelWelcome.textContent = `Welcome Again ${welName[0]}`;
    containerApp.style.opacity = 100;

    //UPDATE UI
    updateUI(currUser);
  } else {
    console.log('Incorrect User or Password');
  }
});

const updateUI = function (account) {
  printBalanceApp(account);
  //DISPLAY SUMMARY
  printDisplaySumary(account);
  //DISPLAY MOVEMENTS
  displayMovements(account.movements);
};
//IMPLEMENTING TRANSFERS

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const accountTransfer = accounts.find(
    acc => acc.user === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    amount <= currUser.balance &&
    accountTransfer &&
    accountTransfer.user !== currUser.user
  ) {
    currUser.movements.push(-amount);
    accountTransfer.movements.push(amount);
    updateUI(currUser);
  } else {
    console.log('Invalid');
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currUser.user &&
    Number(inputClosePin.value) === currUser.pin
  ) {
    const index = accounts.findIndex(acc => acc.user === currUser.user);
    //Splice Mutates original array
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  } else {
    console.log('Wrong User or Pasword');
  }
});

const owners = ['Jonas', 'Zach', 'Adam', 'Marthe'];
//["Adam", "Jonas", "Marthe", "Zach"]
console.log(owners.sort());

//Ascending Order
//[-650, -400, -130, 70, 200, 450, 1300, 3000]
movements.sort((a, b) => {
  return a > b ? 1 : -1;
});

//Descending Order
//[3000, 1300, 450, 200, 70, -130, -400, -650]
movements.sort((a, b) => {
  return a > b ? -1 : 1;
});
console.log(movements);

//FILL fill all with an specific number
const x = new Array(7);
x.fill(0);
console.log(x);
x.fill(1, 5, 7); //[0, 0, 0, 0, 0, 1, 1]
console.log(x);

//Array.from()
//[1, 2, 3, 4, 5, 6, 7]
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const arrayUI = Array.from(document.querySelectorAll('.movements__value'));
  console.log(arrayUI.map(el => Number(el.textContent)));
});
