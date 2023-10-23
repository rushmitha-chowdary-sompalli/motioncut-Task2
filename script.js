const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.close-button');

function openLightbox(imageSrc) {
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex'; // Show the lightbox
}

function closeLightbox() {
    lightbox.style.display = 'none'; // Hide the lightbox
}

galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        openLightbox(image.src);
    });
});

closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.style.display !== 'none') {
        closeLightbox();
    }
});

// Hide the lightbox by default
lightbox.style.display = 'none';

