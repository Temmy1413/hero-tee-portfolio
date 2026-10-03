const photoGallery = document.getElementById("photoGallery");
const categoryButtons = document.querySelectorAll(".category-btn");


// ========================================
// PHOTO CATEGORIES
// ========================================

const photoCategories = {

    event: {
        folder: "photos/event",
        count: 17
    },

    lifestyle: {
        folder: "photos/lifestyle",
        count: 6
    },

    portraits: {
        folder: "photos/portraits",
        count: 27
    },

    streetshoot: {
        folder: "photos/streetshoot",
        count: 15
    },

    nightshoot: {
        folder: "photos/nightshoot",
        count: 11
    }

};


// ========================================
// PHOTO LIGHTBOX VARIABLES
// ========================================

let currentPhotos = [];
let currentPhotoIndex = 0;

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");


// ========================================
// SHOW PHOTOS
// ========================================

function showPhotos(category) {

    if (!photoGallery) {
        return;
    }

    photoGallery.innerHTML = "";

    const selectedCategory = photoCategories[category];

    currentPhotos = [];

    for (let i = 1; i <= selectedCategory.count; i++) {

        const imagePath =
            `${selectedCategory.folder}/${category} (${i}).jpg`;

        currentPhotos.push(imagePath);

        photoGallery.innerHTML += `
            <div class="photo-item">
                <img src="${imagePath}" alt="${category} Photography">
            </div>
        `;
    }
}


// ========================================
// CATEGORY BUTTONS
// ========================================

if (categoryButtons.length > 0) {

    categoryButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const category = button.dataset.category;

            categoryButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            showPhotos(category);

        });

    });

    showPhotos("event");

    categoryButtons[0].classList.add("active");
}


// ========================================
// PHOTO LIGHTBOX
// ========================================

if (photoGallery && lightbox) {

    photoGallery.addEventListener("click", function(event) {

        if (event.target.tagName === "IMG") {

            currentPhotoIndex =
                currentPhotos.indexOf(event.target.src);

            lightboxImage.src = currentPhotos[currentPhotoIndex];

            lightbox.classList.add("active");

        }

    });

}


if (lightboxClose) {

    lightboxClose.addEventListener("click", function() {

        lightbox.classList.remove("active");

    });

}


if (lightboxPrev) {

    lightboxPrev.addEventListener("click", function() {

        currentPhotoIndex--;

        if (currentPhotoIndex < 0) {
            currentPhotoIndex = currentPhotos.length - 1;
        }

        lightboxImage.src = currentPhotos[currentPhotoIndex];

    });

}


if (lightboxNext) {

    lightboxNext.addEventListener("click", function() {

        currentPhotoIndex++;

        if (currentPhotoIndex >= currentPhotos.length) {
            currentPhotoIndex = 0;
        }

        lightboxImage.src = currentPhotos[currentPhotoIndex];

    });

}


if (lightbox) {

    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

}


// ========================================
// GRAPHIC DESIGN GALLERY
// ========================================

const designGallery = document.getElementById("designGallery");

if (designGallery) {

    for (let i = 1; i <= 27; i++) {

        const imagePath = `designs/designs (${i}).png`;

        designGallery.innerHTML += `
            <div class="design-item">
                <img src="${imagePath}" alt="Graphic Design ${i}">
            </div>
        `;

    }

}


// ========================================
// GRAPHIC DESIGN LIGHTBOX
// ========================================

const designLightbox = document.getElementById("designLightbox");
const designLightboxImage = document.getElementById("designLightboxImage");
const designLightboxClose = document.getElementById("designLightboxClose");
const designLightboxPrev = document.getElementById("designLightboxPrev");
const designLightboxNext = document.getElementById("designLightboxNext");

let currentDesignIndex = 0;
const designImages = [];


// Get all Graphic Design images

if (designGallery) {

    const images = designGallery.querySelectorAll("img");

    images.forEach(function(image) {
        designImages.push(image.src);
    });

}


// Open Graphic Design Lightbox

if (designGallery && designLightbox) {

    designGallery.addEventListener("click", function(event) {

        if (event.target.tagName === "IMG") {

            currentDesignIndex =
                designImages.indexOf(event.target.src);

            designLightboxImage.src =
                designImages[currentDesignIndex];

            designLightbox.classList.add("active");

        }

    });

}


// Previous Design

if (designLightboxPrev) {

    designLightboxPrev.addEventListener("click", function() {

        currentDesignIndex--;

        if (currentDesignIndex < 0) {
            currentDesignIndex = designImages.length - 1;
        }

        designLightboxImage.src =
            designImages[currentDesignIndex];

    });

}


// Next Design

if (designLightboxNext) {

    designLightboxNext.addEventListener("click", function() {

        currentDesignIndex++;

        if (currentDesignIndex >= designImages.length) {
            currentDesignIndex = 0;
        }

        designLightboxImage.src =
            designImages[currentDesignIndex];

    });

}


// Close Button

if (designLightboxClose) {

    designLightboxClose.addEventListener("click", function() {

        designLightbox.classList.remove("active");

    });

}


// Click outside image to close

if (designLightbox) {

    designLightbox.addEventListener("click", function(event) {

        if (event.target === designLightbox) {

            designLightbox.classList.remove("active");

        }

    });

}


// ========================================
// CUSTOM FRAMING GALLERY
// ========================================

const framingGallery = document.getElementById("framingGallery");

if (framingGallery) {

    for (let i = 1; i <= 11; i++) {

        const imagePath = `framing/framing (${i}).jpg`;

        framingGallery.innerHTML += `
            <div class="framing-item">
                <img src="${imagePath}" alt="Custom Framing ${i}">
            </div>
        `;

    }

}

// ========================================
// CUSTOM FRAMING LIGHTBOX
// ========================================

const framingLightbox = document.getElementById("framingLightbox");
const framingLightboxImage = document.getElementById("framingLightboxImage");
const framingLightboxClose = document.getElementById("framingLightboxClose");
const framingLightboxPrev = document.getElementById("framingLightboxPrev");
const framingLightboxNext = document.getElementById("framingLightboxNext");

let currentFramingIndex = 0;
const framingImages = [];


// Get all framing images

if (framingGallery) {

    const images = framingGallery.querySelectorAll("img");

    images.forEach(function(image) {
        framingImages.push(image.src);
    });

}


// Open framing lightbox

if (framingGallery && framingLightbox) {

    framingGallery.addEventListener("click", function(event) {

        if (event.target.tagName === "IMG") {

            currentFramingIndex =
                framingImages.indexOf(event.target.src);

            framingLightboxImage.src =
                framingImages[currentFramingIndex];

            framingLightbox.classList.add("active");

        }

    });

}


// Previous framing image

if (framingLightboxPrev) {

    framingLightboxPrev.addEventListener("click", function() {

        currentFramingIndex--;

        if (currentFramingIndex < 0) {
            currentFramingIndex = framingImages.length - 1;
        }

        framingLightboxImage.src =
            framingImages[currentFramingIndex];

    });

}


// Next framing image

if (framingLightboxNext) {

    framingLightboxNext.addEventListener("click", function() {

        currentFramingIndex++;

        if (currentFramingIndex >= framingImages.length) {
            currentFramingIndex = 0;
        }

        framingLightboxImage.src =
            framingImages[currentFramingIndex];

    });

}


// Close framing lightbox

if (framingLightboxClose) {

    framingLightboxClose.addEventListener("click", function() {

        framingLightbox.classList.remove("active");

    });

}


// Click outside image to close

if (framingLightbox) {

    framingLightbox.addEventListener("click", function(event) {

        if (event.target === framingLightbox) {

            framingLightbox.classList.remove("active");

        }

    });

}

// ========================================
// HERO TYPING EFFECT
// ========================================

const typingText = document.getElementById("typing-text");

if (typingText) {

    const phrases = [
        "I capture moments that tell your story.",
        "I create visuals that make brands stand out.",
        "I turn ideas into bold visual experiences.",
        "I bring your creative vision to life."
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting) {

            typingText.textContent =
                currentPhrase.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentPhrase.length) {

                isDeleting = true;

                setTimeout(typeEffect, 2200);
                return;

            }

        } else {

            typingText.textContent =
                currentPhrase.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                isDeleting = false;

                phraseIndex++;

                if (phraseIndex >= phrases.length) {
                    phraseIndex = 0;
                }

            }

        }

        setTimeout(typeEffect, isDeleting ? 45 : 70);

    }

    typeEffect();

}