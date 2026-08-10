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
/* ==========================================
   PART 3 - DOWNLOAD, SHARE & ANIMATIONS
========================================== */

/* -------------------------
   DOWNLOAD BUTTON
------------------------- */

if(downloadBtn){

    downloadBtn.addEventListener("click",()=>{

        const a=document.createElement("a");

        a.href=lightboxImg.src;

        a.download="Sangatpura-Boyz-Photo";

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

    });

}


/* -------------------------
   SHARE BUTTON
------------------------- */

if(shareBtn){

shareBtn.addEventListener("click",async()=>{

    const imageURL=lightboxImg.src;

    if(navigator.share){

        try{

            await navigator.share({

                title:"Sangatpura Boyz Entertainment",

                text:"Check out this photo.",

                url:imageURL

            });

        }catch(err){}

    }else{

        try{

            await navigator.clipboard.writeText(imageURL);

            alert("Photo link copied.");

        }catch(err){

            prompt("Copy this link",imageURL);

        }

    }

});

}


/* -------------------------
   PAGE LOADER
------------------------- */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.classList.add("hide");

        },600);

    }

});


/* -------------------------
   FADE UP ANIMATION
------------------------- */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});

},{
threshold:0.15
});


document.querySelectorAll(

".fade-up,.section-heading,.about-box,.big-card,.side-card,.gallery-slider,.contact-box,.social-btn"

).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});


/* -------------------------
   HERO TITLE ANIMATION
------------------------- */

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


/* -------------------------
   HERO LOGO FLOAT
------------------------- */

const heroLogo=document.querySelector(".hero-logo");

if(heroLogo){

heroLogo.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3500,

iterations:Infinity

});

}
/* ==========================================
   PART 4 - NAVIGATION & FINAL
========================================== */

/* Active Navigation */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.offsetHeight;

        if(pageYOffset>=top && pageYOffset<top+height){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});


/* Back To Top */

const backTop=document.querySelector(".back-to-top");

if(backTop){

    backTop.style.opacity="0";
    backTop.style.pointerEvents="none";

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            backTop.style.opacity="1";
            backTop.style.pointerEvents="auto";

        }else{

            backTop.style.opacity="0";
            backTop.style.pointerEvents="none";

        }

    });

}


/* Mobile Menu */

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

if(menuBtn && nav){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("show");

    });

}


/* Close Mobile Menu */

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        if(nav){

            nav.classList.remove("show");

        }

    });

});


/* Prevent Drag */

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("draggable","false");

});


/* Final Init */

document.addEventListener("DOMContentLoaded",()=>{

    console.log("Sangatpura Boyz Entertainment Loaded Successfully");

    if(typeof updateSlider==="function"){

        updateSlider();

    }

});