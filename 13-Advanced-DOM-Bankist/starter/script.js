'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const header = document.querySelector('.header');
const message = document.createElement('div');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
6;
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/*
//CREATE , DELETE AND SELECT ELEMENTS
//Select all sections in the HTML document
//NodeList(4)
const allSections = document.querySelectorAll('.section');
console.log(allSections);
//HTMLCollection(9)
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
*/
//Create and insert elements
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookied for improved functionality and analytics.' +
  '<button class = "btn btn--close-cookie">Got it!</button';

header.prepend(message);

//Delete element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.parentElement.removeChild(message);
  });
/*
//Styles
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

message.style.height = '49px';
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
*/
//document.documentElement.style.setProperty('--color-primary', '#33CC33');
/*
// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';

//Non-Standard
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bank of America');
console.log(logo.getAttribute('company'));

const link = document.querySelector('.nav__link--btn');
console.log(link.getAttribute('href'));
*/
//Scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  //Scrolling
  /* window.scrollTo({
    left: s1coords.left,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  */
  //Scrolling 2nd way
  section1.scrollIntoView({ behavior: 'smooth' });
});

/*
//One Way
for (let i = 1; i <= 3; i++) {
  document.querySelectorAll(`a[href^="#section--${i}"]`).forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}

*/

//Second Way
document.querySelectorAll('.nav__link').forEach(function (eL) {
  eL.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

/*
// Events Handlers
const h1 = document.querySelector('h1');

const alerth1 = function (e) {
  alert('addEventListener: Great you are reading the heading');
  //h1.removeEventListener('mouseenter', alerth1);
};

h1.addEventListener('mouseenter', alerth1);

//After 3 secons remove event
setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000);

*/

//Tabs Component
tabsContainer.addEventListener('click', function (e) {
  // closest method () traverses the element parents and return a node that matches
  const clicked = e.target.closest('.operations__tab');

  //Guard Clause when clicked is Null
  if (!clicked) return;

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Active tab
  clicked.classList.add('operations__content--active');

  //Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  //console.log(clicked);
});

//Hover over Menu
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

//Sticky scrolling
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const obsOptions = {
  root: null,
  treshold: 0,
  rootMargin: `${navHeight}px`, //Header appera 90 pixls before sections 1
};

const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
headerObserver.observe(header);

//Reveal Sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  //Better Performance
  observer.unobserve(entry.target);
};

const obsOps = {
  root: null,
  treshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealSection, obsOps);

//All sections starts hidden
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//Lazy Loading Images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  treshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));

//Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let currSlide = 0;
const maxSlide = slides.length;
const slider = document.querySelector('.slider');
//slider.style.overflow = 'visible';

const goToslide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToslide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToslide(currSlide);
};
goToslide(0);
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
/*
const variable = document.querySelector('.nav');

variable.style.backgroundColor = '#000000';

const variable1 = document.querySelector('.nav__item');
variable1.style.backgroundColor = 'blue';
*/
