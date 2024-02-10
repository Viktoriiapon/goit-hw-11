import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";


const ref = {
  formEl: document.querySelector('.js-search-form'),
  infoEl: document.querySelector('.list-images'),
};

function getImages(nameImages) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const PARAMS = `?q=${nameImages}`;

  const url = BASE_URL + END_POINT + PARAMS;

  console.log(PARAMS);
  fetch(url);
}

// Виклик функції getImages з певним ім'ям зображень
getImages('exampleImageName');