import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  infoEl: document.querySelector('.list-images'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const userQuery = e.target.elements.query.value;

  getImages(userQuery).then(data=>{
    console.log(data);
  });
}

function getImages(nameImages) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = '/api/';
  const PARAMS = `?key=42187150-1e170edc08d41224404163b7f&q=${nameImages}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + END_POINT + PARAMS;
    
  return fetch(url)
    .then(res => {
      return res.json();
    });
}

function imageTemplate(nameImages){
    return ''
}
