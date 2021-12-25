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
  console.log(e.code)
  if (e.code === "Escape") {
    modal.close();
  }
};

link.forEach((l) => {
  l.addEventListener('click', (e) => e.preventDefault())
});

gallery.onclick = (e) => {
  if (e.target.nodeName !== 'IMG'){
    return
  }
  const href = e.target.dataset.source

  const alt = e.target.alt
  modal = basicLightbox.create(
    `
		<img width="1400" height="900" src="${href}" alt = "${alt}">
	`, {
        onClose: (instance) => {window.removeEventListener("keydown", modalClose)}
      }
);

  modal.show()

  window.addEventListener("keydown", modalClose);
}


