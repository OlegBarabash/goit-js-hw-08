// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(SimpleLightbox);

const gallery = document.querySelector('.gallery')

gallery.insertAdjacentHTML('afterbegin', addMarkap(galleryItems))

function addMarkap(arr) {
    return arr.map(({ preview, original, description }) =>`
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"/>
            </a>
        </li>`
    ).join('')
}

const sLBox = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
})
