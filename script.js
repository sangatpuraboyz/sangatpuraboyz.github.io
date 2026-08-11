/*==========================================
SANGATPURA BOYZ ENTERTAINMENT
SCRIPT.JS
PART 1
==========================================*/

/*==========================
MOBILE MENU
==========================*/

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

        menu.classList.remove("active");

    });

});

/*==========================
BACK TO TOP
==========================*/

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.opacity="1";
topBtn.style.visibility="visible";

}else{

topBtn.style.opacity="0";
topBtn.style.visibility="hidden";

}

});

/*==========================
LIGHTBOX
==========================*/

const galleryImages=document.querySelectorAll(".gallery-img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const closeBtn=document.getElementById("close-photo");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src=img.src;

document.body.style.overflow="hidden";

});

});

closeBtn.addEventListener("click",()=>{

lightbox.classList.remove("active");

document.body.style.overflow="auto";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

document.body.style.overflow="auto";

}

});
/*==========================================
SCRIPT.JS
PART 2
FINAL
==========================================*/

/*==========================
FADE ANIMATION
==========================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section,.video-card,.gallery-img,.contact-card,.about-box").forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});


/*==========================
IMAGE LAZY LOAD
==========================*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";
img.decoding="async";

});


/*==========================
VIDEO LAZY LOAD
==========================*/

document.querySelectorAll("iframe").forEach(frame=>{

frame.loading="lazy";

});


/*==========================
HEADER SHADOW
==========================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";

}else{

header.style.boxShadow="none";

}

});


/*==========================
PRELOAD HERO VIDEO
==========================*/

const heroVideo=document.querySelector(".hero video");

if(heroVideo){

heroVideo.preload="metadata";

heroVideo.playsInline=true;

}


/*==========================
DISABLE IMAGE DRAG
==========================*/

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});


/*==========================
KEYBOARD CLOSE
==========================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightbox.classList.remove("active");

document.body.style.overflow="auto";

}

});


/*==========================
PAGE LOADED
==========================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

console.log("Sangatpura Boyz Entertainment Loaded Successfully");

});