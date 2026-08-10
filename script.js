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
/* ==========================================================
   PART 2 - LIGHTBOX
========================================================== */

const lightbox = document.querySelector(".photo-lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const lightPrev = document.querySelector(".lightbox-prev");
const lightNext = document.querySelector(".lightbox-next");
const lightClose = document.querySelector(".lightbox-close");

const downloadBtn = document.getElementById("downloadBtn");
const shareBtn = document.getElementById("shareBtn");


/* ---------- OPEN ---------- */

function openLightbox(){

    if(!lightbox || slides.length===0) return;

    const img = slides[currentSlide].querySelector("img");

    if(!img) return;

    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;

    if(downloadBtn){

        downloadBtn.href = img.src;
        downloadBtn.download = img.alt || "photo";

    }

    lightbox.classList.add("active");

    document.body.classList.add("lightbox-open");

}


/* ---------- CLOSE ---------- */

function closeLightbox(){

    if(!lightbox) return;

    lightbox.classList.remove("active");

    document.body.classList.remove("lightbox-open");

}


/* ---------- UPDATE ---------- */

function updateLightbox(){

    if(!lightbox.classList.contains("active")) return;

    const img = slides[currentSlide].querySelector("img");

    if(!img) return;

    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;

    if(downloadBtn){

        downloadBtn.href = img.src;

    }

}


/* ---------- CLICK IMAGE ---------- */

slides.forEach((slide,index)=>{

    slide.addEventListener("click",()=>{

        currentSlide=index;

        updateSlider();

        openLightbox();

    });

});


/* ---------- NEXT ---------- */

function nextImage(){

    nextSlide();

    updateLightbox();

}


/* ---------- PREVIOUS ---------- */

function prevImage(){

    prevSlide();

    updateLightbox();

}


/* ---------- BUTTONS ---------- */

if(lightNext){

    lightNext.addEventListener("click",nextImage);

}

if(lightPrev){

    lightPrev.addEventListener("click",prevImage);

}

if(lightClose){

    lightClose.addEventListener("click",closeLightbox);

}


/* ---------- OUTSIDE CLICK ---------- */

if(lightbox){

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});

}


/* ---------- KEYBOARD ---------- */

document.addEventListener("keydown",(e)=>{

    if(!lightbox ||
       !lightbox.classList.contains("active")) return;

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


/* ---------- MOBILE SWIPE ---------- */

let lightStartX = 0;

if(lightbox){

lightbox.addEventListener("touchstart",(e)=>{

    lightStartX = e.touches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

    let lightEndX = e.changedTouches[0].clientX;

    if(lightStartX-lightEndX>50){

        nextImage();

    }

    if(lightEndX-lightStartX>50){

        prevImage();

    }

});

}
/* ==========================================================
   PART 3 - DOWNLOAD • SHARE • LOADER • ANIMATIONS
========================================================== */


/* ---------- DOWNLOAD ---------- */

if(downloadBtn){

    downloadBtn.addEventListener("click",(e)=>{

        e.preventDefault();

        const a=document.createElement("a");

        a.href=lightboxImage.src;

        a.download="Sangatpura-Boyz-Photo";

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

    });

}


/* ---------- SHARE ---------- */

if(shareBtn){

shareBtn.addEventListener("click",async()=>{

    const url=lightboxImage.src;

    if(navigator.share){

        try{

            await navigator.share({

                title:"Sangatpura Boyz Entertainment",

                text:"Sangatpura Gallery",

                url:url

            });

        }catch(e){}

    }else{

        try{

            await navigator.clipboard.writeText(url);

            alert("Photo link copied.");

        }catch(e){

            prompt("Copy Photo URL",url);

        }

    }

});

}


/* ---------- PAGE LOADER ---------- */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.classList.add("hide");

        },700);

    }

});


/* ---------- FADE ANIMATION ---------- */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});

},{
threshold:0.20
});


document.querySelectorAll(

".section-heading,.big-card,.side-card,.about-box,.gallery-slider,.social-btn,.contact-box"

).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});


/* ---------- HERO TITLE ---------- */

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

heroTitle.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

}


/* ---------- HERO LOGO ---------- */

const heroLogo=document.querySelector(".hero-logo");

if(heroLogo){

heroLogo.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3500,

iterations:Infinity

});

}


/* ---------- IMAGE DRAG OFF ---------- */

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("draggable","false");

});