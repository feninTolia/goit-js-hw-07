import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
    </div>`
  )
  .join('');

refs.gallery.innerHTML = galleryMarkup;

refs.gallery.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  const onModalEscapeKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      instance.close();
      refs.gallery.removeEventListener('keydown', onModalEscapeKeyDown);
    }
  };

  refs.gallery.addEventListener('keydown', onModalEscapeKeyDown);
});
