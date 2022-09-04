import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>`
  )
  .join('');

refs.gallery.innerHTML = galleryMarkup;

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
