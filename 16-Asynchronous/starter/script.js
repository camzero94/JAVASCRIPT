'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.subregion}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
//Make the request
/*
const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);

  request.send();
  console.log(request.responseText);
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

;
  });
};
//const countryPerson = prompt('Please introduce the name of the country');

getCountry('colombia');
*/
//PROMISES

//FETCH returns a promise
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      //Print Response 
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      //Print data = [{...}]
      console.log(data);
      renderCountry(data[0]);
    });
};

getCountryData('colombia');
*/
/*
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response =>
    response.json().then(data => renderCountry(data[0]))
  );
};
getCountryData('colombia');
*/
const getJSON = function (url, msg) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${msg}(${response.status})`);
    return response.json();
  });
};

//CHANING PROMISES
const getCountryData = function (country) {
  //Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country Not Found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0]; //neighbour = ESP, POR, COL
      console.log(neighbour);
      //If do not have neighbour
      if (!neighbour) throw new Error('No Neighbour Found'); //Guard Clause

      //Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not Found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  //getCountryData('italia');
  //btn.disabled = true;
  whereImAm(5.07, -75.513);
});

const whereImAm = function (lat, lon) {
  fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`)
    .then(response => {
      console.log(response);
      if (!response.ok) throw new Error('Reload to Fast');
      return response.json();
    })
    .then(data => {
      console.log(`You are in  ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not Found ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => {
      return console.error(`${err.message}`);
      //renderError(`Something went Wrong`);
    });
};
