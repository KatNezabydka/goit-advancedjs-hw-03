import { getPhotos } from './js/pixabay-api';
import createCardsMarkup from './js/render-functions';
import { showErrorToast } from './js/utils/toast.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

searchFormEl.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();
  if (userQuery === ''){
    showErrorToast("Search can't be empty");
    form.reset();
    return;
  }

  getPhotos(userQuery)
    .then(data => {
      if (data.total === 0) {
        galleryEl.innerHTML = '';
        showErrorToast('Sorry, there are no images matching your search query. Please try again!');
        return;
      }

      galleryEl.innerHTML = createCardsMarkup(data.hits);

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
      });

      lightbox.refresh();
    })
    .catch(console.error)
    .finally(() => {
      document.getElementById('loader').style.display = 'none';
      form.reset();
    });
}