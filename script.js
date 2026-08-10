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