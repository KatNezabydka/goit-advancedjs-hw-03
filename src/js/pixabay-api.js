const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '46431994-a635163271497b221c43ba27b';

function getPhotos(query) {
  document.getElementById('loader').style.display = 'flex';

  const url = `${BASE_URL}/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url)
    .then(response => {

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

export { getPhotos };
