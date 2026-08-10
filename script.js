/* ==========================================================
   SANGATPURA BOYZ ENTERTAINMENT
   SCRIPT.JS
   PART 1 - GALLERY SLIDER
========================================================== */

const track = document.querySelector(".gallery-track");
const slides = document.querySelectorAll(".gallery-slide");
const prevBtn = document.querySelector(".gallery-prev");
const nextBtn = document.querySelector(".gallery-next");
const dotsContainer = document.querySelector(".gallery-dots");

let currentSlide = 0;
let autoSlide = null;
let startX = 0;

/* ---------- UPDATE SLIDER ---------- */

function updateSlider(){

    if(!track || slides.length===0) return;

    track.style.transform =
    `translateX(-${currentSlide * 100}%)`;

    const dots =
    document.querySelectorAll(".gallery-dot");

    dots.forEach(dot=>dot.classList.remove("active"));

    if(dots[currentSlide]){
        dots[currentSlide].classList.add("active");
    }

}

/* ---------- NEXT ---------- */

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    updateSlider();

}

/* ---------- PREVIOUS ---------- */

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    updateSlider();

}

/* ---------- CREATE DOTS ---------- */

if(track && slides.length){

    slides.forEach((slide,index)=>{

        const dot =
        document.createElement("button");

        dot.className = "gallery-dot";

        if(index===0){
            dot.classList.add("active");
        }

        dot.addEventListener("click",()=>{

            currentSlide=index;

            updateSlider();

        });

        if(dotsContainer){

            dotsContainer.appendChild(dot);

        }

    });

}

/* ---------- BUTTONS ---------- */

if(nextBtn){

    nextBtn.addEventListener("click",nextSlide);

}

if(prevBtn){

    prevBtn.addEventListener("click",prevSlide);

}

/* ---------- AUTO SLIDE ---------- */

function startAutoSlide(){

    stopAutoSlide();

    autoSlide =
    setInterval(nextSlide,4000);

}

function stopAutoSlide(){

    if(autoSlide){

        clearInterval(autoSlide);

    }

}

if(track){

    startAutoSlide();

    track.addEventListener(
        "mouseenter",
        stopAutoSlide
    );

    track.addEventListener(
        "mouseleave",
        startAutoSlide
    );

}

/* ---------- MOBILE SWIPE ---------- */

if(track){

track.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

track.addEventListener("touchend",(e)=>{

    const endX=
    e.changedTouches[0].clientX;

    if(startX-endX>50){

        nextSlide();

    }

    if(endX-startX>50){

        prevSlide();

    }

});

}

/* ---------- START ---------- */

updateSlider();