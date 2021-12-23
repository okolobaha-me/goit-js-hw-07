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

const link = document.querySelectorAll(".gallery__link");

let modal = {};

const modalClose = (e) => {
  if (e.code === "Escape") {
    modal.close(() => window.removeEventListener("keydown", modalClose));
  }
};

link.forEach((l) => {
  l.onclick = (e) => {
    e.preventDefault();
    const href = l.href;
    const alt = l.querySelector("img").alt;
    modal = basicLightbox.create(
      `
		<img width="1400" height="900" src="${href}" alt = "${alt}">
	`
    );

    modal.show();
    window.addEventListener("keydown", modalClose);
  };
});
