// ===============================
// SANGATPURA BOYZ ENTERTAINMENT
// PREMIUM SCRIPT.JS
// ===============================

// ---------- LOADER ----------

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

// ---------- MOBILE MENU ----------

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

// ---------- BACK TO TOP ----------

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 400) {

        backTop.style.opacity = "1";
        backTop.style.pointerEvents = "auto";

    } else {

        backTop.style.opacity = "0";
        backTop.style.pointerEvents = "none";

    }

});

// ---------- GALLERY LIGHTBOX ----------

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.querySelector(".lightbox");
const lightImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightImg.src = img.src;

    });

});

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}

if (lightbox) {

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

}

// ---------- ESC CLOSE ----------

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});

// ---------- FADE ANIMATION ----------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section,.video-card,.about-card,.contact-card").forEach(el => {

    el.classList.add("fade");

    observer.observe(el);

});

// ---------- HEADER SHADOW ----------

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

console.log("Sangatpura Boyz Entertainment Loaded Successfully");