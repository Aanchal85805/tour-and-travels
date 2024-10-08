// navbar scroll js 
    document.addEventListener("scroll", function() {
        const navbar = document.getElementById("navbar1");
        if (window.scrollY > 50) { // Adjust the scroll distance as needed
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

// testimonial js 
let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.testimonial-card');
    const totalSlides = slides.length;
    const slidesToShow = 3;
    
    slideIndex += direction;
    
    if (slideIndex < 0) {
        slideIndex = totalSlides - slidesToShow;
    } else if (slideIndex > totalSlides - slidesToShow) {
        slideIndex = 0;
    }

    updateSliderPosition();
}

function currentSlide(index) {
    slideIndex = index * 3;  // Adjust to align the first slide of each set
    updateSliderPosition();
}

function updateSliderPosition() {
    const track = document.querySelector('.testimonial-track');
    const slideWidth = document.querySelector('.testimonial-card').clientWidth + 20;
    const dots = document.querySelectorAll('.dot');

    // Move the track to the correct position
    track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

    // Update the active dot based on the current slideIndex
    dots.forEach((dot, idx) => {
        dot.classList.remove('active');
        if (idx === Math.floor(slideIndex / 3)) {  // Ensure dot matches the correct set of slides
            dot.classList.add('active');
        }
    });
}

// Auto-slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

// Initialize the slider
updateSliderPosition();
