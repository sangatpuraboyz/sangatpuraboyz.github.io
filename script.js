// ======================
// LOADER
// ======================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

// ======================
// MOBILE MENU
// ======================

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

// ======================
// BACK TO TOP
// ======================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ======================
// GALLERY
// ======================

const images=document.querySelectorAll(".gallery-img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const closeBtn=document.getElementById("closeBtn");

const prevBtn=document.getElementById("prevBtn");

const nextBtn=document.getElementById("nextBtn");

let currentIndex=0;

function showImage(index){

lightbox.classList.add("active");

lightboxImg.src=images[index].src;

currentIndex=index;

}

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

showImage(index);

});

});

nextBtn.addEventListener("click",()=>{

currentIndex++;

if(currentIndex>=images.length){

currentIndex=0;

}

showImage(currentIndex);

});

prevBtn.addEventListener("click",()=>{

currentIndex--;

if(currentIndex<0){

currentIndex=images.length-1;

}

showImage(currentIndex);

});

closeBtn.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active")) return;

if(e.key==="Escape"){

lightbox.classList.remove("active");

}

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

});

// ======================
// MOBILE SWIPE
// ======================

let startX=0;

lightbox.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>50){

nextBtn.click();

}

if(endX-startX>50){

prevBtn.click();

}

});

// ======================
// HEADER SHADOW
// ======================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});

console.log("Sangatpura Boyz Entertainment Loaded Successfully");
