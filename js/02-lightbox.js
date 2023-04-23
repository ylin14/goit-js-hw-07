import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ref = {
    gallery: document.querySelector('.gallery'),
  };

//   ref.gallery.addEventListener('click', onGalleryImageClick);
  
  function createGalleryMarkup(arr) {
    return arr
      .map(
        ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`,
      )
      .join('');
  };
  
  ref.gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

  const lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionsData: "alt",
   });


