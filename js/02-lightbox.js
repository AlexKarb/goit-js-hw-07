import { galleryItems } from './gallery-items.js';
// Change code below this line

//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
//   },



const galleryRef = document.querySelector(".gallery")
createGallery(galleryItems);

const gallery = new SimpleLightbox('.gallery__link', { captionDelay: 250 });




function createGallery(array) {

    const markup = array.map(el =>
       `<li class = "gallery__item">
            <a class="gallery__link" href="${el.original}">
                <img
                class="gallery__image"
                src="${el.preview}"
                alt="${el.description}"
                title="${el.description}"
                />
            </a>
        </li>`).join("");

    return galleryRef.innerHTML = markup;
}