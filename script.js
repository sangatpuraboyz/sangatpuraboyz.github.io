/*==========================================
SCRIPT.JS - PART 5A
Gallery + Navigation + Loader
==========================================*/

const track = document.querySelector(".gallery-track");
const slides = document.querySelectorAll(".gallery-slide");
const prevBtn = document.querySelector(".gallery-prev");
const nextBtn = document.querySelector(".gallery-next");
const dotsContainer = document.querySelector(".gallery-dots");

let current = 0;
let autoSlider;

/* ---------- Create Dots ---------- */

slides.forEach((slide,index)=>{

const dot=document.createElement("button");

dot.className="gallery-dot";

if(index===0) dot.classList.add("active");

dot.onclick=()=>{

current=index;

updateSlider();

};

dotsContainer.appendChild(dot);

});

/* ---------- Update ---------- */

function updateSlider(){

track.style.transform=`translateX(-${current*100}%)`;

document.querySelectorAll(".gallery-dot").forEach((dot,i)=>{

dot.classList.toggle("active",i===current);

});

}

/* ---------- Next ---------- */

function nextSlide(){

current=(current+1)%slides.length;

updateSlider();

}

/* ---------- Previous ---------- */

function prevSlide(){

current=(current-1+slides.length)%slides.length;

updateSlider();

}

nextBtn?.addEventListener("click",nextSlide);
prevBtn?.addEventListener("click",prevSlide);

/* ---------- Auto Slider ---------- */

function startSlider(){

autoSlider=setInterval(nextSlide,4000);

}

function stopSlider(){

clearInterval(autoSlider);

}

track?.addEventListener("mouseenter",stopSlider);
track?.addEventListener("mouseleave",startSlider);

startSlider();

/* ---------- Mobile Swipe ---------- */

let startX=0;

track?.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

track?.addEventListener("touchend",(e)=>{

const endX=e.changedTouches[0].clientX;

if(startX-endX>50) nextSlide();

if(endX-startX>50) prevSlide();

});

/* ---------- Loader ---------- */

window.addEventListener("load",()=>{

document.getElementById("loader")?.classList.add("hide");

});

/* ---------- Mobile Menu ---------- */

const menu=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

menu?.addEventListener("click",()=>{

nav.classList.toggle("show");

});
/*==========================================
SCRIPT.JS - PART 5B
Lightbox + Back To Top + Scroll Effects
==========================================*/

/* ---------- LIGHTBOX ---------- */

const lightbox = document.querySelector(".photo-lightbox");
const lightboxImg = document.getElementById("lightboxImage");

document.querySelectorAll(".gallery-slide img").forEach((img,index)=>{

img.addEventListener("click",()=>{

current=index;

updateSlider();

lightboxImg.src=img.src;
lightboxImg.alt=img.alt;

lightbox.classList.add("active");

});

});

document.querySelector(".lightbox-close")?.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

document.querySelector(".lightbox-next")?.addEventListener("click",()=>{

nextSlide();

const img=slides[current].querySelector("img");

lightboxImg.src=img.src;
lightboxImg.alt=img.alt;

});

document.querySelector(".lightbox-prev")?.addEventListener("click",()=>{

prevSlide();

const img=slides[current].querySelector("img");

lightboxImg.src=img.src;
lightboxImg.alt=img.alt;

});

/* ---------- BACK TO TOP ---------- */

const backTop=document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backTop.style.opacity="1";
backTop.style.pointerEvents="auto";

}else{

backTop.style.opacity="0";
backTop.style.pointerEvents="none";

}

});

/* ---------- ACTIVE NAV ---------- */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let currentSection="";

sections.forEach(section=>{

if(window.scrollY>=section.offsetTop-150){

currentSection=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+currentSection){

link.classList.add("active");

}

});

});

/* ---------- FADE ---------- */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

document.querySelectorAll(

".section-heading,.video-card,.about-box,.gallery-slider,.contact-box"

).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});

/* ---------- DISABLE IMAGE DRAG ---------- */

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});

/* ---------- CLOSE MENU ---------- */

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

nav?.classList.remove("show");

});

});

/* ---------- READY ---------- */

console.log("Sangatpura Boyz Entertainment Loaded");