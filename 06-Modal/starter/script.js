'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const bttnCloseModal = document.querySelector('.close-modal');
const bttnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  //console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < bttnOpenModal.length; i++)
  bttnOpenModal[i].addEventListener('click', openModal);

bttnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const keyFunc = function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
};

document.addEventListener('keydown', keyFunc);
