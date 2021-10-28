import { galleryItems } from './gallery-items.js';



const galleryRef = document.querySelector(".gallery")
const instance = basicLightbox.create(`<img src="" width="800" height="600"/>`, {
    onShow: () => {  window.addEventListener('keydown', escapeCloseModal) },
    onClose: () => {   window.removeEventListener('keydown', escapeCloseModal)},
})


createGallery(galleryItems);


galleryRef.addEventListener('click', (e) => {
    e.preventDefault()
    const thisIsImg = e.target.classList.contains('gallery__image');

    if (!thisIsImg) {
        return
    };

    instance.element().querySelector('img').src = e.target.dataset.source;
    instance.show()

    })




function createGallery(array) {

    const markup = array.map(el =>
     
        `<li class = "gallery__item">
            <a class="gallery__link" href="${el.original}">
                <img
                class="gallery__image"
                src="${el.preview}"
                data-source="${el.original}"
                alt="${el.description}"
                />
            </a>
        </li>`).join("");

    return galleryRef.innerHTML = markup;
}

function escapeCloseModal(e) {
        if (e.key === "Escape") {
            instance.close() 
        }
    }




