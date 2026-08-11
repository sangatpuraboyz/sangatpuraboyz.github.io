// =============================
// SANGATPURA BOYZ ENTERTAINMENT
// Premium Website Script
// =============================

// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    document.querySelectorAll("#menu a").forEach(link => {

        link.addEventListener("click", () => {
            menu.classList.remove("show");
        });

    });

}

// BACK TO TOP

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}

// HEADER SHADOW

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 40) {

        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.82)";
        header.style.boxShadow = "none";

    }

});

// GALLERY

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeBtn");

const currentImage = document.getElementById("currentImage");
const totalImages = document.getElementById("totalImages");

let index = 0;

if (totalImages) {
    totalImages.textContent = images.length;
}

function openImage(i) {

    index = i;

    lightbox.classList.add("active");

    lightboxImg.src = images[index].src;

    if (currentImage) {

        currentImage.textContent = index + 1;

    }

}

images.forEach((img, i) => {

    img.addEventListener("click", () => {

        openImage(i);

    });

});

function nextImage() {

    index++;

    if (index >= images.length) {

        index = 0;

    }

    openImage(index);

}

function prevImage() {

    index--;

    if (index < 0) {

        index = images.length - 1;

    }

    openImage(index);

}

if (nextBtn) nextBtn.onclick = nextImage;

if (prevBtn) prevBtn.onclick = prevImage;

if (closeBtn) {

    closeBtn.onclick = () => {

        lightbox.classList.remove("active");

    };

}

if (lightbox) {

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

}

// KEYBOARD

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active")) return;

    if (e.key === "ArrowRight") nextImage();

    if (e.key === "ArrowLeft") prevImage();

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});

// MOBILE SWIPE

let startX = 0;

if (lightbox) {

    lightbox.addEventListener("touchstart", e => {

        startX = e.changedTouches[0].clientX;

    });

    lightbox.addEventListener("touchend", e => {

        let endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) nextImage();

        if (endX - startX > 50) prevImage();

    });

}

console.log("Sangatpura Boyz Entertainment Loaded Successfully");