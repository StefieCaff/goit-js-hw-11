//------------------imports/require------------------------------
import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const axios = require('axios').default;

const userInput = document.querySelector('.searchQuery');
const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + userInput + "&image_type=photo&orientation=horizontal&safesearch=true";

const renderGallery = images => {

  const gallery = document.querySelector('.gallery');
  const markup = images
    .map((image) => {
  
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads
      } = imgParams;
      return (gallery.innerHTML =
        `
          <div class="photo-card">
            <a class="gallery__item" href="${largeImageURL}">
              <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
              <p class="info-item">
                <b>Likes: ${likes}</b>
              </p>
              <p class="info-item">
                <b>Views: ${views}</b>
              </p>
              <p class="info-item">
                <b>Comments: ${comments}</b>
              </p>
              <p class="info-item">
                <b>Downloads: ${downloads}</b>
              </p>
            </div>
          </div>

        `
      )
    })
    .join("");
  gallery.innerHTML = markup;
};

// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });




//--------------initialize------------------------------

//simple lightbox image library
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, throttleInterval: 100 });