import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createGallery = (list) => {
  return list
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
    .join("");
};

const gallery = document.querySelector(".gallery");

gallery.innerHTML = createGallery(galleryItems);

const links = document.querySelectorAll("a");

let lightbox = new SimpleLightbox(".gallery .gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

const onClickImg = (e) => {
  e.preventDefault();
};

links.forEach((link) => link.addEventListener("click", onClickImg));
