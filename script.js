<script src="script.js"></script>
</body>
</html>
/* ==========================================
   SANGATPURA BOYZ ENTERTAINMENT
   SCRIPT.JS
   PART 1 - GALLERY SLIDER
========================================== */

const track = document.querySelector(".gallery-track");
const slides = document.querySelectorAll(".gallery-slide");
const prevBtn = document.querySelector(".gallery-prev");
const nextBtn = document.querySelector(".gallery-next");
const dotsContainer = document.querySelector(".gallery-dots");

let currentSlide = 0;
let autoSlider = null;
let startX = 0;
let endX = 0;

/* Stop if gallery doesn't exist */

if(track && slides.length){

    /* Create Dots */

    slides.forEach((slide,index)=>{

        const dot = document.createElement("button");

        dot.className = "gallery-dot";

        if(index===0){
            dot.classList.add("active");
        }

        dot.addEventListener("click",()=>{

            currentSlide=index;
            updateSlider();

        });

        dotsContainer.appendChild(dot);

    });

    const dots=document.querySelectorAll(".gallery-dot");

    /* Update Slider */

    function updateSlider(){

        track.style.transform=
        `translateX(-${currentSlide*100}%)`;

        dots.forEach(dot=>{
            dot.classList.remove("active");
        });

        dots[currentSlide].classList.add("active");

    }

    /* Next */

    function nextSlide(){

        currentSlide++;

        if(currentSlide>=slides.length){

            currentSlide=0;

        }

        updateSlider();

    }

    /* Previous */

    function prevSlide(){

        currentSlide--;

        if(currentSlide<0){

            currentSlide=slides.length-1;
/* ==========================================
   PART 2 - LIGHTBOX (FULLSCREEN)
========================================== */

const lightbox = document.querySelector(".photo-lightbox");
const lightboxImg = document.getElementById("lightboxImage");

const lightPrev = document.querySelector(".lightbox-prev");
const lightNext = document.querySelector(".lightbox-next");
const lightClose = document.querySelector(".lightbox-close");

const downloadBtn = document.getElementById("downloadBtn");
const shareBtn = document.getElementById("shareBtn");

/* Open Lightbox */

if(slides.length && lightbox){

    slides.forEach((slide,index)=>{

        slide.addEventListener("click",()=>{

            currentSlide=index;

            openLightbox();

        });

    });

}

/* ------------------------- */

function openLightbox(){

    if(!lightbox) return;

    lightbox.classList.add("active");

    document.body.classList.add("lightbox-open");

    updateLightbox();

}

/* ------------------------- */

function closeLightbox(){

    if(!lightbox) return;

    lightbox.classList.remove("active");

    document.body.classList.remove("lightbox-open");

}

/* ------------------------- */

function updateLightbox(){

    if(!slides.length) return;

    const image=
    slides[currentSlide].querySelector("img");

    if(!image) return;

    lightboxImg.src=image.src;

    lightboxImg.alt=image.alt;

    if(downloadBtn){

        downloadBtn.href=image.src;

        downloadBtn.download=image.alt || "photo";

    }

}

/* ------------------------- */

function nextImage(){

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    updateSlider();

    updateLightbox();

}

/* ------------------------- */

function prevImage(){

    currentSlide--;

    if(currentSlide<0){

        currentSlide=slides.length-1;

    }

    updateSlider();

    updateLightbox();

}

/* ------------------------- */

if(lightNext){

    lightNext.addEventListener("click",nextImage);

}

if(lightPrev){

    lightPrev.addEventListener("click",prevImage);

}

if(lightClose){

    lightClose.addEventListener("click",closeLightbox);

}

/* -------------------------
   Click Outside Close
------------------------- */

if(lightbox){

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});

}

/* -------------------------
   Keyboard Support
------------------------- */

document.addEventListener("keydown",(e)=>{

    if(!lightbox ||
       !lightbox.classList.contains("active")){

        return;

    }

    if(e.key==="Escape"){

        closeLightbox();

    }

    if(e.key==="ArrowRight"){

        nextImage();

    }

    if(e.key==="ArrowLeft"){

        prevImage();

    }

});

/* -------------------------
   Mobile Swipe Lightbox
------------------------- */

let lightStartX=0;

let lightEndX=0;

if(lightbox){

lightbox.addEventListener("touchstart",(e)=>{

    lightStartX=e.touches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

    lightEndX=e.changedTouches[0].clientX;

    if(lightStartX-lightEndX>50){

        nextImage();

    }

    if(lightEndX-lightStartX>50){

        prevImage();

    }

});

}